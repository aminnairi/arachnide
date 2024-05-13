import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const menu = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLMenuElement>, "name">): VirtualObjectElement => {
  return element({
    name: "menu",
    attributes,
    content,
    reference
  });
};
