import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const col = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "col",
    attributes,
    children,
    reference
  });
};
