import { VirtualObjectElement } from "@arachnide/core";

export const hgroup = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "hgroup",
    attributes,
    children,
    reference
  };
};
