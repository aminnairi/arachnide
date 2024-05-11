import { VirtualObjectElement } from "@arachnide/core";

export const b = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "b",
    attributes,
    children,
    reference
  };
};
