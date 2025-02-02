import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface ThAttributes extends VirtualHTMLElementAttributes<HTMLTableColElement> {
  abbr?: string,
  colspan?: number,
  headers?: string,
  rowspan?: number,
  // TODO: list enumerated values for the scope attribute
  scope?: string,
}

export interface ThOptions extends Omit<VirtualHTMLElement<HTMLTableColElement>, "name"> {
  attributes?: ThAttributes,
}

export const th = (options: ThOptions) => {
  return element({
    ...options,
    name: "th"
  });
};
