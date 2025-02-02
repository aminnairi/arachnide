import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface DelAttributes extends VirtualHTMLElementAttributes<HTMLElement> {
  cite?: string,
  datatime?: Date
}

export interface DelOptions extends Omit<VirtualHTMLElement<HTMLElement>, "name"> {
  attributes?: DelAttributes
}

export const del = (options: DelOptions) => {
  return element({
    ...options,
    name: "del"
  });
};
