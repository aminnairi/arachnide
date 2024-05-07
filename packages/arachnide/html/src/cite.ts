import { VirtualObjectElement } from "@arachnide/core";

export const cite = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "cite",
    attributes,
    children
  };
};
