import { DOMReference } from "./types";

export const isDOMReference = <GenericElement extends Element>(input: unknown): input is DOMReference<GenericElement> => {
  return typeof input === "object" 
    && input !== null 
    && "target" in input 
    && (input.target === null || input.target instanceof Element)
};
