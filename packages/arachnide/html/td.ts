import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface TdAttributes extends VirtualHTMLElementAttributes {
  colspan?: number,
  headers?: string,
  rowspan?: number,
}

export interface TdOptions extends Omit<VirtualHTMLElement<HTMLTableCellElement>, "name"> {
  attributes?: TdAttributes,
}

export const td = (options: TdOptions) => {
  return element({
    ...options,
    name: "td"
  });
};
