import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const th = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTableCellElement>, "name">): VirtualObjectElement => {
  return element({
    name: "th",
    attributes,
    content,
    reference
  });
};
