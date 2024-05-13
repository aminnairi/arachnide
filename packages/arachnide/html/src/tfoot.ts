import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const tfoot = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">): VirtualObjectElement => {
  return element({
    name: "tfoot",
    attributes,
    content,
    reference
  });
};
