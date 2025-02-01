import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface QAttributes extends VirtualHTMLElementAttributes {
  cite?: string,
}

export interface QOptions extends Omit<VirtualHTMLElement<HTMLQuoteElement>, "name"> {
  attributes?: QAttributes,
}

export const q = (options: QOptions) => {
  return element({
    ...options,
    name: "q"
  });
};
