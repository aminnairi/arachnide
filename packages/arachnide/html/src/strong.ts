import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const strong = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "strong",
    attributes,
    children,
    reference
  });
};
