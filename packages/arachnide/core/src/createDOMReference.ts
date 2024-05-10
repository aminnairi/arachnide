import { DOMReference } from "./types";

export const createDOMReference = <GenericElement extends Element>(target: GenericElement | null = null): DOMReference<GenericElement> => {
  return {
    target
  };
};
