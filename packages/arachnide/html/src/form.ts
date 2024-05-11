import { VirtualObjectElement } from "@arachnide/core";

export const form = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "form",
    attributes,
    children,
    reference
  };
};
