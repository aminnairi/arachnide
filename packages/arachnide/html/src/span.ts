import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const span = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLSpanElement>, "name">): VirtualObjectElement => {
  return element({
    name: "span",
    attributes,
    children,
    reference
  });
};
