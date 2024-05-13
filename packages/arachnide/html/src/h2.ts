import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h2 = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    name: "h2",
    attributes,
    children,
    reference
  });
};
