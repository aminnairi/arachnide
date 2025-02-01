import { element, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface BlockquoteAttributes extends VirtualHTMLElementAttributes {
  cite?: string
}

export const blockquote = (options: BlockquoteAttributes) => {
  return element({
    ...options,
    name: "blockquote"
  });
};
