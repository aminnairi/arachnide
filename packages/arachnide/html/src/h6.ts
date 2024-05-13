import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h6 = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    name: "h6",
    attributes,
    children,
    reference
  });
};
