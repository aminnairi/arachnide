import { DOMReference } from "@arachnide/core";

export const blur = <GenericElement extends HTMLElement>(domReference: DOMReference<GenericElement>): void => {
  if (domReference.target instanceof HTMLElement) {
    domReference.target.blur();
  }
};