import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface SourceAttributes extends VirtualHTMLElementAttributes {
  type?: string,
  src?: string,
  srcset?: string,
  sizes?: string,
  media?: string,
  height?: number,
  width?: number,
}

export interface SourceOptions extends Omit<VirtualHTMLElement<HTMLSourceElement>, "name"> {
  attributes?: SourceAttributes
}

export const source = (options: SourceOptions) => {
  return element({
    ...options,
    name: "source"
  });
};
