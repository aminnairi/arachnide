export type VirtualStringElement = string;

/**
 * An attribute can either be some scalar value (string, boolean, number, ...) that will be parsed as string
 * Or it can be a function in case of an event listener
 */
type VirtualObjectElementAttributes = {
  [Key in string]: string | ((event: Event) => void)
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

export type CreateApplicationOptions<State, EventName> = {
  view: View<State, EventName>,
  root: Element,
  state: State,
  update: Update<EventName, State>
}

export * from "./application";
export * from "./createPatch";
export * from "./element";
export * from "./elements/a";
export * from "./elements/abbr";
export * from "./elements/address";
export * from "./elements/area";
export * from "./elements/article";
export * from "./elements/aside";
export * from "./elements/audio";
export * from "./elements/b";
export * from "./elements/bdi";
export * from "./elements/bdo";
export * from "./elements/blockquote";
export * from "./elements/br";
export * from "./elements/button";
export * from "./elements/caption";
export * from "./elements/cite";
export * from "./elements/code";
export * from "./elements/col";
export * from "./elements/colgroup";
export * from "./elements/data";
export * from "./elements/datalist";
export * from "./elements/dd";
export * from "./elements/del";
export * from "./elements/details";
export * from "./elements/dfn";
export * from "./elements/dialog";
export * from "./elements/div";
export * from "./elements/dl";
export * from "./elements/dt";
export * from "./elements/em";
export * from "./elements/embed";
export * from "./elements/fieldset";
export * from "./elements/figcaption";
export * from "./elements/figure";
export * from "./elements/footer";
export * from "./elements/form";
export * from "./elements/h1";
export * from "./elements/h2";
export * from "./elements/h3";
export * from "./elements/h4";
export * from "./elements/h5";
export * from "./elements/h6";
export * from "./elements/header";
export * from "./elements/hgroup";
export * from "./elements/hr";
export * from "./elements/i";
export * from "./elements/iframe";
export * from "./elements/img";
export * from "./elements/input";
export * from "./elements/ins";
export * from "./elements/kbd";
export * from "./elements/label";
export * from "./elements/legend";
export * from "./elements/li";
export * from "./elements/main";
export * from "./elements/map";
export * from "./elements/mark";
export * from "./elements/menu";
export * from "./elements/meter";
export * from "./elements/nav";
export * from "./elements/object";
export * from "./elements/ol";
export * from "./elements/optgroup";
export * from "./elements/option";
export * from "./elements/output";
export * from "./elements/p";
export * from "./elements/picture";
export * from "./elements/portal";
export * from "./elements/pre";
export * from "./elements/progress";
export * from "./elements/q";
export * from "./elements/rp";
export * from "./elements/rt";
export * from "./elements/ruby";
export * from "./elements/s";
export * from "./elements/samp";
export * from "./elements/search";
export * from "./elements/section";
export * from "./elements/select";
export * from "./elements/small";
export * from "./elements/source";
export * from "./elements/span";
export * from "./elements/strong";
export * from "./elements/sub";
export * from "./elements/summary";
export * from "./elements/sup";
export * from "./elements/table";
export * from "./elements/tbody";
export * from "./elements/td";
export * from "./elements/textarea";
export * from "./elements/tfoot";
export * from "./elements/th";
export * from "./elements/thead";
export * from "./elements/time";
export * from "./elements/tr";
export * from "./elements/track";
export * from "./elements/u";
export * from "./elements/ul";
export * from "./elements/video";
export * from "./elements/wbr";
