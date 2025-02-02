import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface DetailsAttributes extends VirtualHTMLElementAttributes<HTMLDetailsElement> {
  open?: boolean,
  name?: string,
}

export interface DetailsOptions extends Omit<VirtualHTMLElement<HTMLDetailsElement>, "name"> {
  attributes?: DetailsAttributes
}

export const details = (options: DetailsOptions) => {
  return element({
    ...options,
    name: "details"
  });
};
