import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const table = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTableElement>, "name">): VirtualObjectElement => {
  return element({
    name: "table",
    attributes,
    content,
    reference
  });
};
