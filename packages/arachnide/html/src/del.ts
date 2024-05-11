import { VirtualObjectElement } from "@arachnide/core";

export const del = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "del",
    attributes,
    children,
    reference
  };
};
