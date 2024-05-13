import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const aside = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "aside",
    attributes,
    content,
    reference
  });
};
