import { VirtualObjectElement } from "@arachnide/core";

export const cite = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "cite",
    attributes,
    children,
    reference
  };
};
