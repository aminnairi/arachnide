import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface OutputAttributes extends VirtualHTMLElementAttributes {
  htmlFor?: string,
  form?: string,
  name?: string,
}

export interface OutputOptions extends Omit<VirtualHTMLElement<HTMLOutputElement>, "name"> {
  attributes?: OutputAttributes,
}

export const output = (options: OutputOptions) => {
  return element({
    ...options,
    name: "output"
  });
};
