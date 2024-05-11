export type DOMReference<GenericElement extends Element> = {
  target: null | GenericElement
};

export type RenderedElement = Element | Text | null;

/**
 * A attribute can be a string, a number, a boolean, the null keyword or the
 * undefined keyword, in summary all scalar data types available in JavaScript
 */
export type VirtualObjectElementAttributeValue
  = string
  | number
  | boolean
  | null
  | undefined;

/**
 * An attribute can also be an event listener, this is especially true when
 * dealing with things like attributes that starts with "on" like "onclick"
 */
export type VirtualObjectElementAttributeListener = (event: Event) => void

/**
 * An attribute can either be some scalar value (string, boolean, number, ...)
 * that will be parsed as string Or it can be a function in case of an event
 * listener
 */
type VirtualObjectElementAttributes = {
  [Key in string]: VirtualObjectElementAttributeValue | VirtualObjectElementAttributeListener
}

/**
 * A virtual element can be an object that will define an HTML tag, which is
 * defined by a tag name, some attributes and children if any
 */
export type VirtualObjectElement = {
  /**
   * The name of the tag to create, like "div" or "img"
   */
  name: string,
  /**
   * The attributes in the form of an object for the tag to create, like
   * "class", "for" or "onclick" for event listeners
   */
  attributes?: VirtualObjectElementAttributes | undefined,
  /**
   * Childrens for the tag to create if applicable, for instance for a "ul" tag
   * that will have "li" children
   */
  children?: Array<VirtualElement> | undefined,
  reference?: DOMReference<Element> | undefined
}

/**
 * Available types for a virtual element
 */
export type VirtualElement
  = VirtualObjectElement
  | string
  | number
  | boolean
  | null
  | undefined;

/**
 * An application does not necessarily emit events, so it can be nullable
 */
export type ApplicationWithoutEvent = null;

/**
 * An application that can emit events must abide to this type in order to send
 * ones
 */
export type ApplicationWithEvent = {
  type: string,
  payload: unknown
}

/**
 * The available types for an event
 */
export type ApplicationEvent 
  = ApplicationWithoutEvent
  | ApplicationWithEvent

/**
 * A function which is responsible for sending events through the application
 * view
 */
export type Emitter<ApplicationEvent> = (options: ApplicationEvent) => void;

/**
 * The options that can be gathered from the view function
 */
export type ViewOptions<State, ApplicationEvent> = {
  /**
   * This is the state of the application, and it will be updated each time an
   * event has been sent, meaning the view function will be called again if
   * this is the case
   */
  state: State,
  /**
   * The emitter function that can be used to send events through the view,
   * this function should not change and its reference will remain stable
   * accross renders
   */
  emit: Emitter<ApplicationEvent>,
  go: Go,
  parameters: Record<string, unknown>
}

/**
 * This is the function that gets executed each time there is a render, of
 * course there is some smart logic going on behind the scene to prevent
 * re-creating everything in the actual DOM, but each time you send an event,
 * we need to run this function again in order to get the new virtual DOM and
 * compute the changes that needs to be made to the real DOM
 */
export type View<State, ApplicationEvent> = (options: ViewOptions<State, ApplicationEvent>) => VirtualElement

/**
 * The options that can be gathered from the update function, which is the
 * function responsible for updating your state following your own algorithms,
 * and each time an event is triggered, this function is re-executed
 */
export type UpdateOptions<ApplicationEvent, State> = {
  /**
   * Each time the emitter is called, you pass an event, and this is the event
   * that you receive in the update function, allowing you to compute the next
   * state based on the event emitted
   */
  event: ApplicationEvent,
  /**
   * Besides receiving the event being triggered by the emitter, you also get
   * the previous state, so that you can compute the next state in a functional
   * fashion, without being reliant on a global state variable
   */
  state: State
}

/**
 * The update function allow you to update the state of your application each
 * time an event is triggered
 */
export type Update<ApplicationEvent, State> = (options: UpdateOptions<ApplicationEvent, State>) => State

export type Go = (path: string, parameters: Record<string, unknown>) => void;

/**
 * this is the list of options that you are allowed to pass to the application
 * function and that is responsible for connecting your state, your view and
 * your update logic directly to your DOM, and you can also pass generic
 * arguments if you are using TypeScript in order to properly type the state
 * and the events that your application can send
 */
export type ApplicationOptions<State, EventName> = {
  /**
   * This is the function that is responsible for displaying a graphical
   * interface, and you can also grab the state to display useful and dynamic
   * inforamtions along with the event emitter function allowing you to update
   * the state of your application
   */
  views: Record<string, View<State, EventName>>,
  /**
   * This is the HTML element that needs to be available in your HTML document
   * in order to inject and update your application view, make sure to pass an
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
  state: State,
  /**
   * This is the function that will allow you to react to updates made by the
   * users of your application, you can add your business logic following a
   * change in the state based on an event triggered
   */
  update: Update<EventName, State>
}
