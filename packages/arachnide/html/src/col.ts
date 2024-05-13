import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const col = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "col",
    attributes,
    content,
    reference
  });
};
