import { VirtualElement } from ".";
import { render } from "./render";

/**
 * Create a function that will update the DOM tree based on the differences
 * between two virtual elements
 */
export const createPatch = (oldVirtualElement: VirtualElement, newVirtualElement: VirtualElement) => {
  /**
   * This is the function that will be used to patch any DOM tree element
   */
  return (element: Element) => {
    if (oldVirtualElement === null || oldVirtualElement === undefined) {
      element.replaceWith(render(newVirtualElement));
      return;
    }

    if (typeof oldVirtualElement === "string") {
      if (typeof newVirtualElement === "string") {
        if (oldVirtualElement === newVirtualElement) {
          return;
        }
      }

      element.replaceWith(render(newVirtualElement));
      return;
    }

    if (newVirtualElement === null || newVirtualElement === undefined || typeof newVirtualElement === "string") {
      element.replaceWith(render(newVirtualElement));
      return;
    }

    if (oldVirtualElement.name !== newVirtualElement.name) {
      element.replaceWith(render(newVirtualElement));
      return;
    }

    Object.entries(oldVirtualElement.attributes).forEach(([oldVirtualElementAttributeName, oldVirtualElementAttributeValue]) => {
      const newVirtualElementAttributeValue = newVirtualElement.attributes[oldVirtualElementAttributeName];

      if (newVirtualElementAttributeValue === undefined || newVirtualElementAttributeValue === null) {
        if (oldVirtualElementAttributeName.startsWith("on") && typeof oldVirtualElementAttributeValue === "function") {
          element.removeEventListener(oldVirtualElementAttributeName.slice(2), oldVirtualElementAttributeValue);
          return;
        }

        element.removeAttribute(oldVirtualElementAttributeName);
        return;
      }

      if (newVirtualElementAttributeValue !== oldVirtualElementAttributeValue) {
        if (oldVirtualElementAttributeName.startsWith("on") && typeof newVirtualElementAttributeValue === "function" && typeof oldVirtualElementAttributeValue === "function") {
          const eventName = oldVirtualElementAttributeName.slice(2);

          element.removeEventListener(eventName, oldVirtualElementAttributeValue);
          element.addEventListener(eventName, newVirtualElementAttributeValue);

          return;
        }

        element.setAttribute(oldVirtualElementAttributeName, String(newVirtualElementAttributeValue));
      }
    });

    Object.entries(newVirtualElement.attributes).forEach(([newVirtualElementAttributeName, newVirtualElementAttributeValue]) => {
      const oldVirtualElementAttributeValue = oldVirtualElement.attributes[newVirtualElementAttributeName];

      if (oldVirtualElementAttributeValue !== undefined && oldVirtualElementAttributeValue !== null || newVirtualElementAttributeValue === null || newVirtualElementAttributeValue === undefined) {
        return;
      }

      if (newVirtualElementAttributeName.startsWith("on") && typeof newVirtualElementAttributeValue === "function") {
        element.addEventListener(newVirtualElementAttributeName.slice(2), newVirtualElementAttributeValue);

        return;
      }

      element.setAttribute(newVirtualElementAttributeName, String(newVirtualElementAttributeValue));
    });

    oldVirtualElement.children.forEach((oldVirtualElementChild, oldVirtualElementChildIndex) => {
      const newVirtualElementChild = newVirtualElement.children[oldVirtualElementChildIndex];
      const elementChild = element.childNodes.item(oldVirtualElementChildIndex);

      if (elementChild === null) {
        throw new Error("Append child not implemented");
      }

      const patch = createPatch(oldVirtualElementChild, newVirtualElementChild);

      patch(elementChild as Element);
    });
  }
};
