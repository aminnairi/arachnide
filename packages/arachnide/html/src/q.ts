import { VirtualObjectElement } from "@arachnide/core";

export const q = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "q",
    attributes,
    children,
    reference
  };
};
