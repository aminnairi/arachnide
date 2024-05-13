import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const select = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLSelectElement>, "name">): VirtualObjectElement => {
  return element({
    name: "select",
    attributes,
    content,
    reference
  });
};
