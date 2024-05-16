import { isVirtualBooleanElement } from "./isVirtualBooleanElement";
import { isVirtualNullElement } from "./isVirtualNullElement";
import { isVirtualNumberElement } from "./isVirtualNumberElement";
import { isVirtualStringElement } from "./isVirtualStringElement";
import { isVirtualUndefinedElement } from "./isVirtualUndefinedElement";
import { VirtualElement, VirtualObjectElement } from "./types";

/**
 * Checks whether a data structure is a virtual element. A virtual element is
 * simply an object which abstract the representation of a DOM element in the
 * DOM Tree before its creation. This is used in many location of the
 * source-code of the framework so it becomes handy. You should not need this
 * function, but you can use it for your algorithms if you really want to.
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
