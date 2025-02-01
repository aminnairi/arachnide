import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface LiAttributes extends VirtualHTMLElementAttributes {
  value?: number,
}

export interface LiOptions extends Omit<VirtualHTMLElement<HTMLLIElement>, "name"> {
  attributes?: LiAttributes
}

export const li = (options: LiOptions) => {
  return element({
    ...options,
    name: "li"
  });
};
