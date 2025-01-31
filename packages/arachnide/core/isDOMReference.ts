import { DOMReference } from "./types";

/**
 * Checks whether a data structure is compatible with what we call a reference.
 * You should not need this function as it is used internally but is exposed
 * for you in case you might have to use it.
 */
export const isDOMReference = <GenericElement extends Element>(input: unknown): input is DOMReference<GenericElement> => {
  return typeof input === "object" 
    && input !== null 
    && "target" in input 
    && (input.target === null || input.target instanceof Element)
};
