import { CreateElementOptions, element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface DataAttributes extends VirtualHTMLElementAttributes {
  value?: string | number
}

export interface DataOptions extends Omit<VirtualHTMLElement<HTMLDataElement>, "name"> {
  attributes?: DataAttributes
}

export const data = (options: Omit<CreateElementOptions<HTMLDataElement>, "name">) => {
  return element({
    ...options,
    name: "data"
  });
};
