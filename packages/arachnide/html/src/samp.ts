import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const samp = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "samp",
    attributes,
    content,
    reference
  });
};
