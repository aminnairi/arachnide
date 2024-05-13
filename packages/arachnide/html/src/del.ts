import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const del = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "del",
    attributes,
    content,
    reference
  });
};
