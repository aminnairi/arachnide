import { VirtualObjectElement } from "@arachnide/core";

export const u = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "u",
    attributes,
    children,
    reference
  };
};
