import { ApplicationEvent, ApplicationOptions } from "./types";
export declare const application: <State, GenericEvent extends ApplicationEvent>({ view, root, state, update }: ApplicationOptions<State, GenericEvent>) => {
    emit: (detail: GenericEvent) => void;
};
