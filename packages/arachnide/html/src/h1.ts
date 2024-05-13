import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h1 = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    name: "h1",
    attributes,
    content,
    reference
  });
};
