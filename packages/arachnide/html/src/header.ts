import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const header = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "header",
    attributes,
    content,
    reference
  });
};
