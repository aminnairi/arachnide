import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface ColGroupAttributes extends VirtualHTMLElementAttributes {
  span?: number
}

export interface ColGroupOptions extends Omit<VirtualHTMLElement<HTMLElement>, "name"> {
  attributes?: ColGroupAttributes
}

export const colgroup = (options: ColGroupOptions) => {
  return element({
    ...options,
    name: "colgroup"
  });
};
