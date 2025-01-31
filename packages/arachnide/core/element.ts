import { VirtualHTMLElement } from "./VirtualHTMLElement";
import { WhenCreatedCallback, DOMReference, WhenDestroyedCallback, VirtualElement, VirtualHTMLElementAttributes } from "./types";

export type CreateElementOptions<GenericElement extends Element> = {
  /**
   * This is the name of an HTML Element that you want to create, for instance
   * "hr" or "img".
   */
  name: string,

  /**
   * This is an optional object that will list the attributes that you  might
   * want to attach to the element that will be created, this is a direct
   * mapping with the DOM Web API, this means that to attach the HTML attribute
   * "for", you need to use the DOM property "htmlFor", and for the "class"
   * HTML attribute, you need to use the "className" property (yes, this is
   * also why you need to use these names in React #themoreyouknow).
   */
  attributes?: VirtualHTMLElementAttributes | undefined,

  /**
   * This is essentially the content of the element to create. It can be a
   * string, a number, a boolean, null, undefined or an element or even an
   * array of all of these if you need multiple children.
   */
  content?: Array<VirtualElement> | VirtualElement | undefined,

  /**
   * This is a reference that you created using the "createDOMReference"
   * function, it will simply fill the "target" property with the DOM element
   * created when rendering the app so that you can use it on your own. As said
   * in the "createDOMReference" function, you should really use it in last
   * resort, if there is no solution in the framework for your use-case.
   */
  reference?: DOMReference<GenericElement> | undefined,

  /**
   * This is a life cycle method that is handy to to trigger some instructions
   * whenever the element is created. A created elemet is an element that is
   * created and attached to the DOM tree when rendering the page.
   */
  whenCreated?: WhenCreatedCallback | undefined

  /**
   * This is a life cycle method that is handy to to trigger some instructions
   * whenever the element is destroyed. A destroyed elemet is an element that
   * is removed from the DOM tree when changing the page for instance.
   */
  whenDestroyed?: WhenDestroyedCallback | undefined
};

/**
 * Create a new virtual element based on a tag name, attributes and children.
 * This function is mostly used whenever this library does not expose a
 * function equivalent to a wanted HTML element
 */
export const element = <GenericElement extends Element>({ name, attributes = {}, content = [], reference = undefined, whenCreated = () => { }, whenDestroyed = () => { } }: CreateElementOptions<GenericElement>): VirtualHTMLElement<GenericElement> => {
  return new VirtualHTMLElement(
    name,
    attributes,
    Array.isArray(content) ? content : [content],
    reference ?? { target: null },
    whenCreated,
    whenDestroyed
  );
};
