import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const colgroup = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "colgroup",
    attributes,
    content,
    reference
  });
};
