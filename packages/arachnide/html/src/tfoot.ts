import { VirtualObjectElement } from "@arachnide/core";

export const tfoot = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "tfoot",
    attributes,
    children
  };
};
