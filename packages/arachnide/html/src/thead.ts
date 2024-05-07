import { VirtualObjectElement } from "@arachnide/core";

export const thead = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "thead",
    attributes,
    children
  };
};
