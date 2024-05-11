import { VirtualObjectElement } from "@arachnide/core";

export const tbody = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "tbody",
    attributes,
    children,
    reference
  };
};
