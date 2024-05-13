import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const li = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLLIElement>, "name">): VirtualObjectElement => {
  return element({
    name: "li",
    attributes,
    content,
    reference
  });
};
