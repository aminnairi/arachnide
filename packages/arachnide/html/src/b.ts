import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const b = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "b",
    attributes,
    content,
    reference
  });
};
