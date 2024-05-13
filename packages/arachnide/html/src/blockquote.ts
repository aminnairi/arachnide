import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const blockquote = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "blockquote",
    attributes,
    content,
    reference
  });
};
