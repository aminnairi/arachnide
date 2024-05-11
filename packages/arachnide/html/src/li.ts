import { VirtualObjectElement } from "@arachnide/core";

export const li = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "li",
    attributes,
    children,
    reference
  };
};
