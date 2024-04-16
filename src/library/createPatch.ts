import { VirtualElement } from ".";
import { render } from "./render";

/**
 * Create a function that will update the DOM tree based on the differences between two virtual elements
 */
export const createPatch = (oldVirtualElement: VirtualElement, newVirtualElement: VirtualElement) => {
  /**
   * This is the function that will be used to patch any DOM tree element
   */
  return (element: Element) => {
    if (oldVirtualElement === null) {
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

    if (newVirtualElement === null || typeof newVirtualElement === "string") {
      element.replaceWith(render(newVirtualElement));
      return;
    }

    if (oldVirtualElement.name !== newVirtualElement.name) {
      element.replaceWith(render(newVirtualElement));
      return;
    }

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
