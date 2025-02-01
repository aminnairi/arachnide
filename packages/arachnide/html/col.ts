import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface ColAttributes extends VirtualHTMLElementAttributes {
  span?: number
}

export interface ColOptions extends Omit<VirtualHTMLElement<HTMLElement>, "name"> {
  attributes?: ColAttributes
}

export const col = (options: ColOptions) => {
  return element({
    ...options,
    name: "col"
  });
};