import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ul = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLUListElement>, "name">): VirtualObjectElement => {
  return element({
    name: "ul",
    attributes,
    content,
    reference
  });
};
