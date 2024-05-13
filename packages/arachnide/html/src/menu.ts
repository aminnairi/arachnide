import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const menu = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLMenuElement>, "name">): VirtualObjectElement => {
  return element({
    name: "menu",
    attributes,
    children,
    reference
  });
};
