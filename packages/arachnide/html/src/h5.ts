import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h5 = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    name: "h5",
    attributes,
    children,
    reference
  });
};
