import { WhenCreatedCallback, DOMReference, WhenDestroyedCallback, VirtualElement, VirtualObjectElement, VirtualObjectElementAttributes } from "./types";

export type CreateElementOptions<GenericElement extends Element> = {
  name: string,
  attributes?: VirtualObjectElementAttributes | undefined,
  content?: Array<VirtualElement> | VirtualElement | undefined,
  reference?: DOMReference<GenericElement> | undefined,
  whenCreated?: WhenCreatedCallback | undefined
  whenDestroyed?: WhenDestroyedCallback | undefined
};

/**
 * Create a new virtual element based on a tag name, attributes and children.
 * This function is mostly used whenever this library does not expose a
 * function equivalent to a wanted HTML element
 */
export const element = <GenericElement extends Element>({ name, attributes = {}, content = [], reference = undefined, whenCreated = () => {}, whenDestroyed = () => {} }: CreateElementOptions<GenericElement>): VirtualObjectElement => {
  return {
   name,
    attributes,
    content: Array.isArray(content) ? content : [content],
    reference: reference ?? { target: null },
    whenCreated,
    whenDestroyed
  };
};
