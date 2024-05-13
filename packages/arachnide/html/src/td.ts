import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const td = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTableCellElement>, "name">): VirtualObjectElement => {
  return element({
    name: "td",
    attributes,
    content,
    reference
  });
};
