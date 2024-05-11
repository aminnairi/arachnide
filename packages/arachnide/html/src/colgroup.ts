import { VirtualObjectElement } from "@arachnide/core";

export const colgroup = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "colgroup",
    attributes,
    children,
    reference
  };
};
