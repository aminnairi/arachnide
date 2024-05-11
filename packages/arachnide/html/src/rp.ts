import { VirtualObjectElement } from "@arachnide/core";

export const rp = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "rp",
    attributes,
    children,
    reference
  };
};
