import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h4 = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    name: "h4",
    attributes,
    children,
    reference
  });
};
