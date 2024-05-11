import { VirtualObjectElement } from "@arachnide/core";

export const strong = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "strong",
    attributes,
    children,
    reference
  };
};
