import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const article = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "article",
    attributes,
    content,
    reference
  });
};
