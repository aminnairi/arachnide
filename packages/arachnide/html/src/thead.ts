import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const thead = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">): VirtualObjectElement => {
  return element({
    name: "thead",
    attributes,
    content,
    reference
  });
};
