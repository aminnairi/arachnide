import { VirtualElement } from ".";
import { render } from "./render";

export const createPatch = (oldVirtualElement: VirtualElement, newVirtualElement: VirtualElement) => {
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
