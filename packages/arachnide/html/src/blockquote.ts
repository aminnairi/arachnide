import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const blockquote = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "blockquote"
  });
};
