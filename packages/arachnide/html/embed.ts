import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface EmbedAttributes extends VirtualHTMLElementAttributes {
  height?: number,
  src?: string,
  type?: string,
  width?: number,
}

export interface EmbedOptions extends Omit<VirtualHTMLElement<HTMLEmbedElement>, "name"> {
  attributes?: EmbedAttributes,
}

export const embed = (options: EmbedOptions) => {
  return element({
    ...options,
    name: "embed"
  });
};
