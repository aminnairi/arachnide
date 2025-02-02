import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface MapAttributes extends VirtualHTMLElementAttributes<HTMLMapElement> {
  name?: string,
}

export interface MapOptions extends Omit<VirtualHTMLElement<HTMLMapElement>, "name"> {
  attributes?: MapAttributes
}

export const map = (options: MapOptions) => {
  return element({
    ...options,
    name: "map"
  });
};
