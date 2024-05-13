import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const s = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "s",
    attributes,
    content,
    reference
  });
};
