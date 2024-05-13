import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const kbd = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "kbd",
    attributes,
    content,
    reference
  });
};
