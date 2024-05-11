import { VirtualObjectElement } from "@arachnide/core";

export const figcaption = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "figcaption",
    attributes,
    children,
    reference
  };
};
