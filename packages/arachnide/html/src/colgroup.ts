import { VirtualObjectElement } from "@arachnide/core";

export const colgroup = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "colgroup",
    attributes,
    children
  };
};
