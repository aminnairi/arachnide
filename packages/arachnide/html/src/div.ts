import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const div = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLDivElement>, "name">): VirtualObjectElement => {
  return element({
    name: "div",
    attributes,
    content,
    reference
  });
};
