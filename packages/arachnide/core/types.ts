import { VirtualHTMLElement } from "./VirtualHTMLElement";

export type VirtualHTMLElementAttributeProperties = {
  accesskey?: string; // A single character or multiple keys (e.g., "a" or "Ctrl+S")
  autocapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";
  autofocus?: boolean;
  className?: string; // Space-separated class names
  contenteditable?: "true" | "false" | "inherit";
  dir?: "ltr" | "rtl" | "auto";
  draggable?: "true" | "false" | "auto";
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  hidden?: boolean;
  id?: string;
  inert?: boolean;
  inputmode?: "none" | "text" | "tel" | "email" | "url" | "numeric" | "decimal" | "search";
  is?: string; // Used for custom elements
  itemid?: string;
  itemprop?: string;
  itemref?: string;
  itemscope?: boolean;
  itemtype?: string;
  lang?: string; // e.g., "en", "fr", "es"
  nonce?: string; // Cryptographic nonce for Content Security Policy (CSP)
  part?: string; // Used for styling with Shadow DOM
  popover?: boolean | "auto"; // New popover API
  role?: string; // ARIA roles
  slot?: string;
  spellcheck?: "true" | "false";
  style?: string; // Inline CSS styles
  tabindex?: number;
  title?: string;
  translate?: "yes" | "no";
  virtualkeyboardpolicy?: "auto" | "manual"; // Controls virtual keyboard display
};

export interface VirtualClipboardEvent<GenericTarget extends Element> extends ClipboardEvent {
  target: GenericTarget
}

export interface VirtualInputEvent<GenericTarget extends Element> extends InputEvent {
  target: GenericTarget
}

export interface VirtualCompositionEvent<GenericTarget extends Element> extends CompositionEvent {
  target: GenericTarget
}

export interface VirtualDragEvent<GenericTarget extends Element> extends DragEvent {
  target: GenericTarget
}

export interface VirtualFocusEvent<GenericTarget extends Element> extends FocusEvent {
  target: GenericTarget
}

export interface VirtualEvent<GenericTarget extends Element> extends Event {
  target: GenericTarget
}

export interface VirtualSubmitEvent<GenericTarget extends Element> extends SubmitEvent {
  target: GenericTarget
}

export interface VirtualKeyboardEvent<GenericTarget extends Element> extends KeyboardEvent {
  target: GenericTarget
}

export interface VirtualMouseEvent<GenericTarget extends Element> extends MouseEvent {
  target: GenericTarget
}

export interface VirtualPointerEvent<GenericTarget extends Element> extends PointerEvent {
  target: GenericTarget
}

export interface VirtualTouchEvent<GenericTarget extends Element> extends TouchEvent {
  target: GenericTarget
}

export interface VirtualUIEvent<GenericTarget extends Element> extends UIEvent {
  target: GenericTarget
}

export interface VirtualWheelEvent<GenericTarget extends Element> extends WheelEvent {
  target: GenericTarget
}

export interface VirtualTransitionEvent<GenericTarget extends Element> extends TransitionEvent {
  target: GenericTarget
}

export interface VirtualAnimationEvent<GenericTarget extends Element> extends AnimationEvent {
  target: GenericTarget
}

export type VirtualHTMLElementAttributeHandler<GenericTarget extends Element> = {
  // Clipboard Events
  oncopy?: (event: VirtualClipboardEvent<GenericTarget>) => void;
  oncut?: (event: VirtualClipboardEvent<GenericTarget>) => void;
  onpaste?: (event: VirtualClipboardEvent<GenericTarget>) => void;

  // Composition Events
  oncompositionend?: (event: VirtualCompositionEvent<GenericTarget>) => void;
  oncompositionstart?: (event: VirtualCompositionEvent<GenericTarget>) => void;
  oncompositionupdate?: (event: VirtualCompositionEvent<GenericTarget>) => void;

  // Drag Events
  ondrag?: (event: VirtualDragEvent<GenericTarget>) => void;
  ondragend?: (event: VirtualDragEvent<GenericTarget>) => void;
  ondragenter?: (event: VirtualDragEvent<GenericTarget>) => void;
  ondragexit?: (event: VirtualDragEvent<GenericTarget>) => void;
  ondragleave?: (event: VirtualDragEvent<GenericTarget>) => void;
  ondragover?: (event: VirtualDragEvent<GenericTarget>) => void;
  ondragstart?: (event: VirtualDragEvent<GenericTarget>) => void;
  ondrop?: (event: VirtualDragEvent<GenericTarget>) => void;

  // Focus Events
  onfocus?: (event: VirtualFocusEvent<GenericTarget>) => void;
  onblur?: (event: VirtualFocusEvent<GenericTarget>) => void;

  // Form Events
  onchange?: (event: VirtualEvent<GenericTarget>) => void;
  oninput?: (event: VirtualInputEvent<GenericTarget>) => void;
  oninvalid?: (event: VirtualEvent<GenericTarget>) => void;
  onreset?: (event: VirtualEvent<GenericTarget>) => void;
  onsubmit?: (event: VirtualSubmitEvent<GenericTarget>) => void;

  // Keyboard Events
  onkeydown?: (event: VirtualKeyboardEvent<GenericTarget>) => void;
  onkeypress?: (event: VirtualKeyboardEvent<GenericTarget>) => void;
  onkeyup?: (event: VirtualKeyboardEvent<GenericTarget>) => void;

  // Mouse Events
  onclick?: (event: VirtualMouseEvent<GenericTarget>) => void;
  oncontextmenu?: (event: VirtualMouseEvent<GenericTarget>) => void;
  ondblclick?: (event: VirtualMouseEvent<GenericTarget>) => void;
  onmousedown?: (event: VirtualMouseEvent<GenericTarget>) => void;
  onmouseenter?: (event: VirtualMouseEvent<GenericTarget>) => void;
  onmouseleave?: (event: VirtualMouseEvent<GenericTarget>) => void;
  onmousemove?: (event: VirtualMouseEvent<GenericTarget>) => void;
  onmouseover?: (event: VirtualMouseEvent<GenericTarget>) => void;
  onmouseout?: (event: VirtualMouseEvent<GenericTarget>) => void;
  onmouseup?: (event: VirtualMouseEvent<GenericTarget>) => void;

  // Pointer Events
  onpointerdown?: (event: VirtualPointerEvent<GenericTarget>) => void;
  onpointermove?: (event: VirtualPointerEvent<GenericTarget>) => void;
  onpointerup?: (event: VirtualPointerEvent<GenericTarget>) => void;
  onpointercancel?: (event: VirtualPointerEvent<GenericTarget>) => void;
  onpointerenter?: (event: VirtualPointerEvent<GenericTarget>) => void;
  onpointerleave?: (event: VirtualPointerEvent<GenericTarget>) => void;
  onpointerover?: (event: VirtualPointerEvent<GenericTarget>) => void;
  onpointerout?: (event: VirtualPointerEvent<GenericTarget>) => void;
  ongotpointercapture?: (event: VirtualPointerEvent<GenericTarget>) => void;
  onlostpointercapture?: (event: VirtualPointerEvent<GenericTarget>) => void;

  // Touch Events
  ontouchcancel?: (event: VirtualTouchEvent<GenericTarget>) => void;
  ontouchend?: (event: VirtualTouchEvent<GenericTarget>) => void;
  ontouchmove?: (event: VirtualTouchEvent<GenericTarget>) => void;
  ontouchstart?: (event: VirtualTouchEvent<GenericTarget>) => void;

  // UI Events
  onscroll?: (event: VirtualEvent<GenericTarget>) => void;
  onresize?: (event: VirtualUIEvent<GenericTarget>) => void;

  // Wheel Events
  onwheel?: (event: VirtualWheelEvent<GenericTarget>) => void;

  // Animation Events
  onanimationstart?: (event: VirtualAnimationEvent<GenericTarget>) => void;
  onanimationend?: (event: VirtualAnimationEvent<GenericTarget>) => void;
  onanimationiteration?: (event: VirtualAnimationEvent<GenericTarget>) => void;

  // Transition Events
  ontransitionend?: (event: VirtualTransitionEvent<GenericTarget>) => void;

  // Media Events
  onabort?: (event: VirtualEvent<GenericTarget>) => void;
  oncanplay?: (event: VirtualEvent<GenericTarget>) => void;
  oncanplaythrough?: (event: VirtualEvent<GenericTarget>) => void;
  ondurationchange?: (event: VirtualEvent<GenericTarget>) => void;
  onemptied?: (event: VirtualEvent<GenericTarget>) => void;
  onended?: (event: VirtualEvent<GenericTarget>) => void;
  onerror?: (event: VirtualEvent<GenericTarget>) => void;
  onloadeddata?: (event: VirtualEvent<GenericTarget>) => void;
  onloadedmetadata?: (event: VirtualEvent<GenericTarget>) => void;
  onloadstart?: (event: VirtualEvent<GenericTarget>) => void;
  onpause?: (event: VirtualEvent<GenericTarget>) => void;
  onplay?: (event: VirtualEvent<GenericTarget>) => void;
  onplaying?: (event: VirtualEvent<GenericTarget>) => void;
  onprogress?: (event: VirtualEvent<GenericTarget>) => void;
  onratechange?: (event: VirtualEvent<GenericTarget>) => void;
  onseeked?: (event: VirtualEvent<GenericTarget>) => void;
  onseeking?: (event: VirtualEvent<GenericTarget>) => void;
  onstalled?: (event: VirtualEvent<GenericTarget>) => void;
  onsuspend?: (event: VirtualEvent<GenericTarget>) => void;
  ontimeupdate?: (event: VirtualEvent<GenericTarget>) => void;
  onvolumechange?: (event: VirtualEvent<GenericTarget>) => void;
  onwaiting?: (event: VirtualEvent<GenericTarget>) => void;
  onbeforeinput?: (event: VirtualInputEvent<GenericTarget>) => void;
  onfullscreenchange?: (event: VirtualEvent<GenericTarget>) => void;
  onfullscreenerror?: (event: VirtualEvent<GenericTarget>) => void;
};


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
 * An attribute can either be some scalar value (string, boolean, number, ...)
 * that will be parsed as string Or it can be a function in case of an event
 * listener
 */
export type VirtualHTMLElementAttributes<GenericTarget extends Element> = VirtualHTMLElementAttributeProperties & VirtualHTMLElementAttributeHandler<GenericTarget>

/**
 * Available types for a virtual element
 */
export type VirtualElement
  = VirtualHTMLElement<any>
  | string
  | number
  | boolean
  | null
  | undefined;

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
export type ApplicationEvent =
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
export type PageOptions<GenericState, GenericEvent extends ApplicationEvent, GenericPath extends string> = {
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
  changePage: ChangePage<GenericPath>,
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
export type Page<GenericState, GenericEvent extends ApplicationEvent, GenericPath extends string> = (options: PageOptions<GenericState, GenericEvent, GenericPath>) => VirtualElement

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
export type ChangePageOptions<GenericPath extends string> = {
  /**
   * The path of the page to change to, for instance "/users/:user" or
   * "/articles/:article/comments/:comment".
   */
  path: GenericPath,

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
export type ChangePage<GenericPath extends string> = (options: ChangePageOptions<GenericPath>) => void;

/**
 * this is the list of options that you are allowed to pass to the application
 * function and that is responsible for connecting your state, your page and
 * your update logic directly to your DOM, and you can also pass generic
 * arguments if you are using TypeScript in order to properly type the state
 * and the events that your application can send
 */
export type StartApplicationOptions<GenericState, GenericEvent extends ApplicationEvent, GenericPath extends string> = {
  /**
   * This is the function that is responsible for displaying a graphical
   * interface, and you can also grab the state to display useful and dynamic
   * inforamtions along with the event emitter function allowing you to update
   * the state of your application
   */
  pages: Record<GenericPath, Page<GenericState, GenericEvent, GenericPath>>,

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
