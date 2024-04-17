export type VirtualStringElement = string;

/**
 * An attribute can either be some scalar value (string, boolean, number, ...) that will be parsed as string
 * Or it can be a function in case of an event listener
 */
type VirtualObjectElementAttributes = {
  [Key in string]: undefined | null | string | ((event: Event) => void)
}

export type VirtualObjectElement = {
  name: string,
  attributes: VirtualObjectElementAttributes,
  children: Array<string | VirtualObjectElement>
}

export type VirtualNullElement = null;

export type VirtualElement = VirtualStringElement | VirtualObjectElement | VirtualNullElement;

export type ApplicationEvent = {
  type: string,
  payload: unknown
}

export type Emitter<ApplicationEvent> = (options: ApplicationEvent) => void;

export type ViewOptions<State, ApplicationEvent> = {
  state: State,
  emit: Emitter<ApplicationEvent>
}

export type View<State, ApplicationEvent> = (options: ViewOptions<State, ApplicationEvent>) => VirtualElement

export type UpdateOptions<ApplicationEvent, State> = {
  event: ApplicationEvent,
  state: State
}

export type Update<ApplicationEvent, State> = (options: UpdateOptions<ApplicationEvent, State>) => State

export type ApplicationOptions<State, EventName> = {
  view: View<State, EventName>,
  root: Element,
  state: State,
  update: Update<EventName, State>
}

export * from "./css";
export * from "./application";
export * from "./createPatch";
export * from "./element";
export * from "./elements";
