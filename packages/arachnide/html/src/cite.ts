import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const cite = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "cite",
    attributes,
    content,
    reference
  });
};
