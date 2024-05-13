import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const tr = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTableRowElement>, "name">): VirtualObjectElement => {
  return element({
    name: "tr",
    attributes,
    content,
    reference
  });
};
