import { VirtualElement } from ".";

export const render = (virtualElement: VirtualElement): Element | Text => {
  if (virtualElement === null) {
    return document.createTextNode("");
  }

  if (typeof virtualElement === "string") {
    return document.createTextNode(virtualElement);
  }

  const element = document.createElement(virtualElement.name);

  Object.entries(virtualElement.attributes).forEach(([attributeName, attributeValue]) => {
    if (attributeValue === undefined || attributeValue === null) {
      return;
    }

    if (attributeName.startsWith("on") && typeof attributeValue === "function") {
      element.addEventListener(attributeName.slice(2), event => attributeValue(event));
      return;
    }

    element.setAttribute(attributeName, String(attributeValue));
  });

  virtualElement.children.forEach(child => {
    element.appendChild(render(child));
  });

  return element;
};
