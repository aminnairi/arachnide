import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const label = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLLabelElement>, "name">): VirtualObjectElement => {
  return element({
    name: "label",
    attributes,
    children,
    reference
  });
};
