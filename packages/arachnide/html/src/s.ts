import { VirtualObjectElement } from "@arachnide/core";

export const s = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "s",
    attributes,
    children,
    reference
  };
};
