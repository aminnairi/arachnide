import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const optgroup = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLOptGroupElement>, "name">): VirtualObjectElement => {
  return element({
    name: "optgroup",
    attributes,
    children,
    reference
  });
};
