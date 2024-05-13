import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h3 = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    name: "h3",
    attributes,
    children,
    reference
  });
};
