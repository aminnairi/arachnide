import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface TextareaAttributes extends VirtualHTMLElementAttributes {
  autocomplete?: string,
  autocorrect?: "on" | "off",
  autofocus?: boolean,
  cols?: number,
  dirname?: string,
  disabled?: boolean,
  form?: string,
  maxlength?: number,
  minlength?: number,
  name?: string,
  placeholder?: string,
  readonly?: boolean,
  required?: boolean,
  rows?: number,
  wrap?: "hard" | "soft",
}

export interface TextareaOptions extends Omit<VirtualHTMLElement<HTMLTextAreaElement>, "name"> {
  attributes?: TextareaAttributes,
}

export const textarea = (options: TextareaOptions) => {
  return element({
    ...options,
    name: "textarea"
  });
};
