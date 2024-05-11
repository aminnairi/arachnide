import { VirtualObjectElement } from "@arachnide/core";

export const col = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "col",
    attributes,
    children,
    reference
  };
};
