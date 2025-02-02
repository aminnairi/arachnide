import { CreateElementOptions, element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface InsAttributes extends VirtualHTMLElementAttributes<HTMLElement> {
  cite?: string,
  datetime?: Date,
}

export interface InsOptions extends Omit<VirtualHTMLElement<HTMLElement>, "name"> {
  attributes?: InsAttributes
}

export const ins = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "ins"
  });
};
