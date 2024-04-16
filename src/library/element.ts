import { VirtualObjectElement } from ".";

/**
 * Create a new virtual element based on a tag name, attributes and children. This function is mostly used whenever this library does not expose a function equivalent to a wanted HTML element
 */
export const element = (virtualObjectElement: VirtualObjectElement): VirtualObjectElement => {
  return virtualObjectElement;
};
