import { element, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface BlockquoteAttributes extends VirtualHTMLElementAttributes<HTMLElement> {
  cite?: string
}

export const blockquote = (options: BlockquoteAttributes) => {
  return element({
    ...options,
    name: "blockquote"
  });
};
