import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const p = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLParagraphElement>, "name">): VirtualObjectElement => {
  return element({
    name: "p",
    attributes,
    children,
    reference
  });
};
