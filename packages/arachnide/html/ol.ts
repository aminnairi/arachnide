import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface OlAttributes extends VirtualHTMLElementAttributes {
  reversed?: boolean,
  start?: number,
  type?: "a" | "A" | "i" | "I" | "1",
}

export interface OlOptions extends Omit<VirtualHTMLElement<HTMLOListElement>, "name"> {
  attributes?: OlAttributes,
}

export const ol = (options: OlAttributes) => {
  return element({
    ...options,
    name: "ol"
  });
};
