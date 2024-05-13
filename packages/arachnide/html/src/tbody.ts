import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const tbody = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">): VirtualObjectElement => {
  return element({
    name: "tbody",
    attributes,
    content,
    reference
  });
};
