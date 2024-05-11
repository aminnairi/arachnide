import { VirtualObjectElement } from "@arachnide/core";

export const tfoot = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "tfoot",
    attributes,
    children,
    reference
  };
};
