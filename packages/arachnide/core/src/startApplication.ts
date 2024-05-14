import { ApplicationEvent, StartApplicationOptions, ChangePage, VirtualElement, UpdateCallback } from "./types";
import { createPatch } from "./createPatch";
import { render } from "./render";
import { findViewFromPath } from "./findViewFromPath";
import { getViewParameters } from "./getViewParameters";

/**
 * Create an application that has a state, can emit events and renders the view
 * each time the state is updated
 */
export const startApplication = <GenericState, GenericEvent extends ApplicationEvent>({ views, root, initialState, onUpdate }: StartApplicationOptions<GenericState, GenericEvent>) => {
  let state = initialState();

  /**
   * Stores the old virtual element, that way we can compare it to the next
   * virtual element each time the state is updated in order to update the DOM
   * exactly where needed, instead of recreating the whole DOM tree again
   */
  let oldVirtualElement: VirtualElement;

  /**
   * Create a unique identifier for the event used when emitting event, so that
   * we are sure we don't clash with an existing standard event
   */
  const updateIdentifier = "arachnide:update";

  /**
   * Emit an event based on a type and eventually a payload. It is recommended
   * to set the payload to null if it is not (yet) used in an event in order to
   * keep the code consistent instead of having some event with a payload and
   * some without
   */
  const update = (callback: UpdateCallback<GenericState, GenericEvent>) => {
    const event = callback(state);

    /**
     * We allow the event to be null for simple applications, so we need to
     * check for that branch
     */
    if (event === null) {
      /**
       * We simply don't dispatch any even in case the detail of the event is
       * null since this is a possible value
       */
      return;
    }

    /**
     * We use the window.dispatchEvent to dispatch a custom event that we later
     * catch in the below listener. Inside this custom even, we simply send the
     * type and payload that is passed to the function so that we can retrieve
     * this data later in the listener
     */
    window.dispatchEvent(new CustomEvent(updateIdentifier, {
      detail: event
    }));
  };

  const changePage: ChangePage = (options) => {
    const targetPath = Object.entries(options.parameters).reduce((previousPath, [parameterName, parameterValue]) => {
      return previousPath.replaceAll(`:${parameterName}`, String(parameterValue));
    }, options.path);

    const searchParameters = new URLSearchParams(Object.entries(options.searchParameters).map(([searchParameterKey, searchParameterValue]) => {
      return [
        searchParameterKey,
        String(searchParameterValue)
      ];
    }));

    const targetPathWithQuery = searchParameters.size === 0 ? targetPath : `${targetPath}?${searchParameters.toString()}`;

    console.log({ targetPathWithQuery });

    window.history.pushState(null, targetPathWithQuery, targetPathWithQuery);
    window.dispatchEvent(new CustomEvent("popstate"));
  };

  window.addEventListener("popstate", () => {
    const [viewPath, view] = findViewFromPath(window.location.pathname, views);
    const parameters = getViewParameters(viewPath, window.location.pathname);
    const searchParameters = Object.fromEntries(new URLSearchParams(window.location.search));

    const newVirtualElement = view({
      state: state,
      update,
      changePage: changePage,
      parameters,
      searchParameters
    });

    const patch = createPatch(oldVirtualElement, newVirtualElement);

    oldVirtualElement = newVirtualElement;

    patch(root.firstChild as Element);
  });

  /**
   * The listener that will listen to the custom event that we are sending
   * whenever we need to trigger a state update
   */
  window.addEventListener(updateIdentifier, ({ detail }: CustomEventInit) => {
    /**
     * We store the new state that is derived from the update function defined
     * in the application
     */
    state = onUpdate({
      event: detail,
      state
    });

    const [viewPath, view] = findViewFromPath(window.location.pathname, views);
    const parameters = getViewParameters(viewPath, window.location.pathname);
    const searchParameters = Object.fromEntries(new URLSearchParams(window.location.search));

    /**
     * Now that we have the state, we can derive the view since it depends on
     * the state, we also pass the emit function to allow the user to send new
     * events even though it should remain the same function from the start
     */
    const newVirtualElement = view({
      state: state,
      update,
      changePage: changePage,
      parameters,
      searchParameters
    });

    /**
     * We cannot simply render the whole DOM tree again and replace the whole
     * HTML content, so we "patch" the existing DOM with the difference between
     * the old and new virtual elements, since after a state update there
     * should be differences that are computed from this function
     */
    const patch = createPatch(oldVirtualElement, newVirtualElement);

    /**
     * We store the new virtual element inside the old virtual element
     * container to allow computing the difference with the next state update,
     * later when the user issues a new update
     */
    oldVirtualElement = newVirtualElement;

    /**
     * We patch the current DOM tree, with only the necessary DOM operations
     * computed from the difference between the old and new virtual elements
     */
    patch(root.firstChild as Element);
  });

  const [viewPath, view] = findViewFromPath(window.location.pathname, views);
  const parameters = getViewParameters(viewPath, window.location.pathname);
  const searchParameters = Object.fromEntries(new URLSearchParams(window.location.search));

  /**
   * We get the first iteration of the virtual element from the view function
   * that is derived from the state
   */
  const virtualElement = view({
    state: state,
    update,
    changePage: changePage,
    parameters,
    searchParameters
  });

  /**
   * we render the DOM tree from the virtual element
   */
  const element = render(virtualElement);

  /**
   * We store the first old virtual element that is really the virtual element
   * in this case
   */
  oldVirtualElement = virtualElement;

  if (element !== null) {
    /**
     * We append a child to the root element that is passed as argument, we may
     * check if this root element is empty or not, maybe there are cases where it
     * needs to be filled but I'm not really sure as it seems weird to render a
     * JavaScript application to an already filled DOM tree, we'll see
     */
    root.appendChild(element);
  }

  /**
   * We return the emit helper as it can be useful to trigger side effects
   * outside the virtual elements, such as in a timer that is outside of the
   * application scope, or even to allow Web Components to update the state of
   * this application
   */
  return {
    update,
    changePage
  };
};
