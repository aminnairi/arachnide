import { DOMReference } from "./types";

/**
 * Creates a reference, which is a simple object that will get a stable value,
 * this is useful for DOM Element reference if you need to use Web API that are
 * not yet supported by this library or you want to mutate the state of an
 * element, keep in mind that you should use it in last resort, when the
 * library does not offer a solution to something that you need regarding the
 * DOM Web API. It can also be used to create a state value that should not
 * imply any re-rendering of the app as using a state and updating it will
 * trigger a new render and if this is not your intention, a reference can be
 * handy.
 */
export const createDOMReference = <GenericElement extends Element>(target: GenericElement | null = null): DOMReference<GenericElement> => {
  return {
    target
  };
};
