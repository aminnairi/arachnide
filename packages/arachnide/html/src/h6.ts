import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h6 = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    name: "h6",
    attributes,
    content,
    reference
  });
};
