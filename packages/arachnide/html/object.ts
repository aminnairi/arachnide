import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface ObjectAttributes extends VirtualHTMLElementAttributes {
  data?: string,
  form?: string,
  height?: number,
  name?: string,
  type?: string,
  width?: number,
}

export interface ObjectOptions extends Omit<VirtualHTMLElement<HTMLObjectElement>, "name"> {
  attributes?: ObjectAttributes,
}

export const object = (options: ObjectOptions) => {
  return element({
    ...options,
    name: "object"
  });
};
