import { VirtualHTMLElement } from "./VirtualHTMLElement";

/**
 * A function that will be called whenever an element is attached to the DOM
 * tree.
 */
export type WhenCreatedCallback = () => void;

/**
 * A function thta will be called whenever an element is removed from the DOM
 * tree.
 */
export type WhenDestroyedCallback = () => void;

/**
 * A function that will return a state that can then be used throughout all the
 * pages.
 */
export type ApplicationState<GenericState> = () => GenericState;

/**
 * An object representing a stable reference to a value, useful for targeting
 * DOM elements for instance or creating values that should not trigger a new
 * render of the page.
 */
export type DOMReference<GenericElement extends Element> = {
  /**
   * The target value, which can be a DOM element.
   */
  target: null | GenericElement
};

/**
 * The result of a virtual element that is finally rendered, meaning attached to the DOM tree.
 */
export type RenderedElement = Element | Text;

/**
 * A attribute can be a string, a number, a boolean, the null keyword or the
 * undefined keyword, in summary all scalar data types available in JavaScript
 */
export type VirtualHTMLElementAttributeValue
  = string
  | number
  | boolean
  | null
  | undefined;

/**
 * An attribute can also be an event listener, this is especially true when
 * dealing with things like attributes that starts with "on" like "onclick"
 */
export type VirtualHTMLElementAttributeListener = (event: Event) => void

/**
 * An attribute can either be some scalar value (string, boolean, number, ...)
 * that will be parsed as string Or it can be a function in case of an event
 * listener
 */
export type VirtualHTMLElementAttributes = {
  [Key in string]: VirtualHTMLElementAttributeValue | VirtualHTMLElementAttributeListener
}

/**
 * Available types for a virtual element
 */
export type VirtualElement
  = VirtualHTMLElement<Element>
  | string
  | number
  | boolean
  | null
  | undefined;

/**
 * An application does not necessarily emit events, so it can be nullable
 */
export type NoEvent = null;

/**
 * An application that can emit events must abide to this type in order to send
 * ones
 */
export type EventWithData = {
  /**
   * The name of the event.
   */
  name: string,

  /**
   * The data that is carried with this event.
   */
  data: unknown
}

/**
 * An event that does not carry any data within itself.
 */
export type EventWithoutData = {
  /**
   * The name of the event.
   */
  name: string
}

/**
 * The available types for an event
 */
export type ApplicationEvent 
  = NoEvent
  | EventWithData
  | EventWithoutData

/**
 * A callback that exposes the old state in order to trigger an event.
 */
export type UpdateCallback<GenericState, GenericEvent extends ApplicationEvent> = (state: GenericState) => GenericEvent

/**
 * A function which is responsible for sending events through the application
 * page.
 */
export type Update<GenericState, GenericEvent extends ApplicationEvent> = (callback: UpdateCallback<GenericState, GenericEvent>) => void;

/**
 * The options that can be gathered from the page function.
 */
export type PageOptions<GenericState, GenericEvent extends ApplicationEvent> = {
  /**
   * This is the state of the application, and it will be updated each time an
   * event has been sent, meaning the page function will be called again if
   * this is the case.
   */
  state: GenericState,
  /**
   * The emitter function that can be used to send events through the page,
   * this function should not change and its reference will remain stable
   * accross renders
   */
  update: Update<GenericState, GenericEvent>,
  /**
   * A function that when called will change the current page.
   */
  changePage: ChangePage,
  /**
   * The parameters that are computed from the URL, for instance with the URL
   * "/users/123" and the path "/users/:user" the parameters will contain a
   * property "user" with a value of 123.
   */
  parameters: Record<string, unknown>,
  /**
   * Any search parameters that might be attached to the URL, for instance with
   * the URL "/users?sort=date", the search parameters will contain a property
   * "sort" with the value "date".
   */
  searchParameters: Record<string, string>
}

/**
 * This is the function that gets executed each time there is a render, of
 * course there is some smart logic going on behind the scene to prevent
 * re-creating everything in the actual DOM, but each time you send an event,
 * we need to run this function again in order to get the new virtual DOM and
 * compute the changes that needs to be made to the real DOM
 */
export type Page<GenericState, GenericEvent extends ApplicationEvent> = (options: PageOptions<GenericState, GenericEvent>) => VirtualElement

/**
 * The options that can be gathered from the update function, which is the
 * function responsible for updating your state following your own algorithms,
 * and each time an event is triggered, this function is re-executed
 */
export type OnUpdateOptions<GenericEvent, GenericState> = {
  /**
   * Each time the emitter is called, you pass an event, and this is the event
   * that you receive in the update function, allowing you to compute the next
   * state based on the event emitted
   */
  event: GenericEvent,
  /**
   * Besides receiving the event being triggered by the emitter, you also get
   * the previous state, so that you can compute the next state in a functional
   * fashion, without being reliant on a global state variable
   */
  state: GenericState
}

/**
 * The update function allow you to update the state of your application each
 * time an event is triggered
 */
export type OnUpdate<GenericEvent, GenericState> = (options: OnUpdateOptions<GenericEvent, GenericState>) => GenericState

/**
 * The options that might be passed through the "changePage" function.
 */
export type ChangePageOptions = {
  /**
   * The path of the page to change to, for instance "/users/:user" or
   * "/articles/:article/comments/:comment".
   */
  path: string,

  /**
   * The parameters that should be attached to the path. For instance with the
   * path "/users/:user", it should be an object with a property "user" contain
   * the value for this parameter.
   */
  parameters: Record<string, unknown>,

  /**
   * Any search parameters that you might want to attach to the target page.
   * For instance for a route like "/confirm?token=1a2b3c", this should be an
   * object with a property "token" with a value of "1a2b3c".
   */
  searchParameters: Record<string, unknown>
}

/**
 * A function which, when called, will change the current page.
 */
export type ChangePage = (options: ChangePageOptions) => void;

/**
 * this is the list of options that you are allowed to pass to the application
 * function and that is responsible for connecting your state, your page and
 * your update logic directly to your DOM, and you can also pass generic
 * arguments if you are using TypeScript in order to properly type the state
 * and the events that your application can send
 */
export type StartApplicationOptions<GenericState, GenericEvent extends ApplicationEvent> = {
  /**
   * This is the function that is responsible for displaying a graphical
   * interface, and you can also grab the state to display useful and dynamic
   * inforamtions along with the event emitter function allowing you to update
   * the state of your application
   */
  pages: Record<string, Page<GenericState, GenericEvent>>,

  /**
   * This is the HTML element that needs to be available in your HTML document
   * in order to inject and update your application page, make sure to pass an
   * Element instance, and do not forget to add a runtime type check in order
   * to ensure that this element is available in the DOM
   */
  root: Element,

  /**
   * This is the state of your application, which should define the visual
   * behavior of your app, try not to add states for things that do not
   * necessarily need a visual representation in your app or that are not
   * tightly coupled to your visual logic
   */
  initialState: ApplicationState<GenericState>,

  /**
   * This is the function that will allow you to react to updates made by the
   * users of your application, you can add your business logic following a
   * change in the state based on an event triggered
   */
  onUpdate: OnUpdate<GenericEvent, GenericState>
}
