import { VirtualObjectElement } from "@arachnide/core";

export const div = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "div",
    attributes,
    children,
    reference
  }
};
