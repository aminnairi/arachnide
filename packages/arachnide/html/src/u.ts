import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const u = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "u",
    attributes,
    content,
    reference
  });
};
