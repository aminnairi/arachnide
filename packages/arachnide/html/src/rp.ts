import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const rp = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "rp",
    attributes,
    content,
    reference
  });
};
