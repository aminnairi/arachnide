import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const aside = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "aside",
    attributes,
    children,
    reference
  });
};
