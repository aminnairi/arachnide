import { VirtualObjectElement } from "@arachnide/core";

export const tr = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "tr",
    attributes,
    children
  };
};
