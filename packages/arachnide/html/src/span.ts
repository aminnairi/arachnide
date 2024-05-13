import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const span = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLSpanElement>, "name">): VirtualObjectElement => {
  return element({
    name: "span",
    attributes,
    content,
    reference
  });
};
