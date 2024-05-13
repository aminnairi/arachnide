import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const p = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLParagraphElement>, "name">): VirtualObjectElement => {
  return element({
    name: "p",
    attributes,
    content,
    reference
  });
};
