import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface SelectAttributes extends VirtualHTMLElementAttributes {
  autocomplete?: string,
  autofocus?: boolean,
  disabled?: boolean,
  form?: string,
  multiple?: boolean,
  name?: string,
  required?: boolean,
  size?: number,
}

export interface SelectOptions extends Omit<VirtualHTMLElement<HTMLSelectElement>, "name"> {
  attributes?: SelectAttributes
}

export const select = (options: SelectAttributes) => {
  return element({
    ...options,
    name: "select"
  });
};
