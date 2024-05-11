import { VirtualObjectElement } from "@arachnide/core";

export const p = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "p",
    attributes,
    children,
    reference
  };
};
