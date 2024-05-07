import { VirtualObjectElement } from "@arachnide/core";

export const menu = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "menu",
    attributes,
    children
  };
};
