import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface FieldsetAttributes extends VirtualHTMLElementAttributes {
  disabled?: boolean,
  form?: string,
  name?: string,
}

export interface FieldsetOptions extends Omit<VirtualHTMLElement<HTMLFieldSetElement>, "name"> {
  attributes?: FieldsetAttributes,
}

export const fieldset = (options: FieldsetOptions) => {
  return element({
    ...options,
    name: "fieldset"
  });
};
