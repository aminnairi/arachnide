import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const figcaption = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "figcaption",
    attributes,
    children,
    reference
  });
};
