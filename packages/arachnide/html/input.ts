import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

// TODO: Fence for some types of inputs but not all using a union

export interface InputAttributes extends VirtualHTMLElementAttributes {
  accept?: string,
  alt?: string,
  autocomplete?: boolean,
  capture?: string,
  checked?: boolean,
  dirname?: string,
  disabled?: boolean,
  form?: string,
  formaction?: string,
  formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain",
  formmethod?: "get" | "post" | "dialog",
  formnovalidate?: boolean,
  formtarget?: "_self" | "_blank" | "_parent" | "_top",
  height?: number,
  inputmode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search",
  list?: string,
  max?: number,
  maxlength?: number,
  min?: number,
  minlength?: number,
  multiple?: boolean,
  name?: string,
  pattern?: RegExp,
  placeholder?: string,
  popovertarget?: string,
  popovertargetaction?: "hide" | "show" | "toggle",
  readonly?: boolean,
  required?: boolean,
  size?: number,
  src?: string,
  step?: number,
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week",
  value?: string | number | Date,
  width?: number
}

export interface InputOptions extends Omit<VirtualHTMLElement<HTMLInputElement>, "name" | "content"> {
  attributes?: InputAttributes
}

export const input = (options: InputOptions) => {
  return element({
    ...options,
    name: "input",
    content: []
  });
};
