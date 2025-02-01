import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface LabelAttributes extends VirtualHTMLElementAttributes {
  htmlFor?: string,
}

export interface LabelOptions extends Omit<VirtualHTMLElement<HTMLLabelElement>, "name"> {
  attributes?: LabelAttributes
}

export const label = (options: LabelOptions) => {
  return element({
    ...options,
    name: "label"
  });
};
