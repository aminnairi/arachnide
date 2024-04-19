export type VirtualObjectElementAttributeValue = string | number | boolean | null | undefined;
export type VirtualObjectElementAttributeListener = (event: Event) => void;
type VirtualObjectElementAttributes = {
    [Key in string]: VirtualObjectElementAttributeValue | VirtualObjectElementAttributeListener;
};
export type VirtualObjectElement = {
    name: string;
    attributes: VirtualObjectElementAttributes;
    children: Array<VirtualElement>;
};
export type VirtualElement = VirtualObjectElement | string | number | boolean | null | undefined;
export type ApplicationWithoutEvent = null;
export type ApplicationWithEvent = {
    type: string;
    payload: unknown;
};
export type ApplicationEvent = ApplicationWithoutEvent | ApplicationWithEvent;
export type Emitter<ApplicationEvent> = (options: ApplicationEvent) => void;
export type ViewOptions<State, ApplicationEvent> = {
    state: State;
    emit: Emitter<ApplicationEvent>;
};
export type View<State, ApplicationEvent> = (options: ViewOptions<State, ApplicationEvent>) => VirtualElement;
export type UpdateOptions<ApplicationEvent, State> = {
    event: ApplicationEvent;
    state: State;
};
export type Update<ApplicationEvent, State> = (options: UpdateOptions<ApplicationEvent, State>) => State;
export type ApplicationOptions<State, EventName> = {
    view: View<State, EventName>;
    root: Element;
    state: State;
    update: Update<EventName, State>;
};
export {};
