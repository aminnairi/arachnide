import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface ButtonAttributes extends VirtualHTMLElementAttributes<HTMLButtonElement> {
  type?: string
}

export interface ButtonOptions extends Omit<VirtualHTMLElement<HTMLButtonElement>, "attributes" | "name"> {
  attributes?: ButtonAttributes
}

export const button = (options: ButtonOptions) => {
  return element({
    name: "button",
    ...options
  });
};
