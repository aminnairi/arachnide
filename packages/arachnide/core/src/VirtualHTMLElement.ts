import { DOMReference, VirtualElement, VirtualHTMLElementAttributes, WhenCreatedCallback, WhenDestroyedCallback } from "./types";

export class VirtualHTMLElement<GenericElement extends Element> {
  /**
   * This is the name of an HTML Element that you want to create, for instance
   * "hr" or "img".
   */
  public readonly name: string;

  /**
   * This is an optional object that will list the attributes that you  might
   * want to attach to the element that will be created, this is a direct
   * mapping with the DOM Web API, this means that to attach the HTML attribute
   * "for", you need to use the DOM property "htmlFor", and for the "class"
   * HTML attribute, you need to use the "className" property (yes, this is
   * also why you need to use these names in React #themoreyouknow).
   */
  public readonly attributes: VirtualHTMLElementAttributes;

  /**
   * This is essentially the content of the element to create. It can be a
   * string, a number, a boolean, null, undefined or an element or even an
   * array of all of these if you need multiple children.
   */
  public readonly content: Array<VirtualElement>;

  /**
   * This is a reference that you created using the "createDOMReference"
   * function, it will simply fill the "target" property with the DOM element
   * created when rendering the app so that you can use it on your own. As said
   * in the "createDOMReference" function, you should really use it in last
   * resort, if there is no solution in the framework for your use-case.
   */
  public readonly reference: DOMReference<GenericElement>;

  /**
   * This is a life cycle method that is handy to to trigger some instructions
   * whenever the element is created. A created elemet is an element that is
   * created and attached to the DOM tree when rendering the page.
   */
  public readonly whenCreated: WhenCreatedCallback;

  /**
   * This is a life cycle method that is handy to to trigger some instructions
   * whenever the element is destroyed. A destroyed elemet is an element that
   * is removed from the DOM tree when changing the page for instance.
   */
  public readonly whenDestroyed: WhenDestroyedCallback

  public constructor(
    name: string,
    attributes: VirtualHTMLElementAttributes, 
    content: Array<VirtualElement>, 
    reference: DOMReference<GenericElement>, 
    whenCreated: WhenCreatedCallback, 
    whenDestroyed: WhenDestroyedCallback
  ) { 
    this.name = name;
    this.attributes = attributes;
    this.content = content;
    this.reference = reference;
    this.whenCreated = whenCreated;
    this.whenDestroyed = whenDestroyed;
  }
}
