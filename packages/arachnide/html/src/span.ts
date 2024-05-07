import { VirtualObjectElement } from "@arachnide/core";

export const span = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "span",
    attributes,
    children
  };
};
