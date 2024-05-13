import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const footer = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "footer",
    attributes,
    content,
    reference
  });
};
