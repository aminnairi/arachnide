import { VirtualObjectElement } from "@arachnide/core";

export const s = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "s",
    attributes,
    children
  };
};
