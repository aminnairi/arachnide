import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface TimeAttributes extends VirtualHTMLElementAttributes {
  datetime?: string,
}

export interface TimeOptions extends Omit<VirtualHTMLElement<HTMLElement>, "name"> {
  attributes?: TimeAttributes,
}

export const time = (options: TimeOptions) => {
  return element({
    ...options,
    name: "time"
  });
};
