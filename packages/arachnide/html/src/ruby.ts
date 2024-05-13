import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ruby = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "ruby",
    attributes,
    content,
    reference
  });
};
