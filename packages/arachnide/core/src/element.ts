import { DOMReference, VirtualElement, VirtualObjectElement, VirtualObjectElementAttributes } from "./types";

export type CreateElementOptions<GenericElement extends Element> = {
  name: string,
  attributes?: VirtualObjectElementAttributes | undefined,
  children?: Array<VirtualElement> | VirtualElement | undefined,
  reference?: DOMReference<GenericElement> | undefined
};

/**
 * Create a new virtual element based on a tag name, attributes and children.
 * This function is mostly used whenever this library does not expose a
 * function equivalent to a wanted HTML element
 */
export const element = <GenericElement extends Element>({ name, attributes = {}, children = [], reference = undefined }: CreateElementOptions<GenericElement>): VirtualObjectElement => {
  return {
   name,
    attributes,
    children: Array.isArray(children) ? children : [children],
    reference: reference ?? { target: null }
  };
};
