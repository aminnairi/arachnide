import { VirtualObjectElement } from "@arachnide/core";

export const menu = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "menu",
    attributes,
    children,
    reference
  };
};
