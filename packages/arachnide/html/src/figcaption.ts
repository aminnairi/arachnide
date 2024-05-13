import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const figcaption = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "figcaption",
    attributes,
    content,
    reference
  });
};
