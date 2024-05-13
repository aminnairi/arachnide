import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const strong = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "strong",
    attributes,
    content,
    reference
  });
};
