import { VirtualObjectElement } from "@arachnide/core";

export const thead = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "thead",
    attributes,
    children,
    reference
  };
};
