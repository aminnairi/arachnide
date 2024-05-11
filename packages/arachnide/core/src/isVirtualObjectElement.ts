import { isVirtualBooleanElement } from "./isVirtualBooleanElement";
import { isVirtualNullElement } from "./isVirtualNullElement";
import { isVirtualNumberElement } from "./isVirtualNumberElement";
import { isVirtualStringElement } from "./isVirtualStringElement";
import { isVirtualUndefinedElement } from "./isVirtualUndefinedElement";
import { VirtualElement, VirtualObjectElement } from "./types";

/**
 * @todo make better assertions about the shape of the virtual object element
 * instead of assuming it can be anything but a scalar type
 */
export const isVirtualObjectElement = (virtualElement: VirtualElement): virtualElement is VirtualObjectElement => {
  return !isVirtualNullElement(virtualElement)
    && !isVirtualUndefinedElement(virtualElement)
    && !isVirtualStringElement(virtualElement)
    && !isVirtualNumberElement(virtualElement)
    && !isVirtualBooleanElement(virtualElement);
};
