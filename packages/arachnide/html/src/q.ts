import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const q = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "q",
    attributes,
    content,
    reference
  });
};
