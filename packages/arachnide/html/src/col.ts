import { VirtualObjectElement } from "@arachnide/core";

export const col = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "col",
    attributes,
    children
  };
};
