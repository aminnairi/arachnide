import { VirtualObjectElement } from "@arachnide/core";

export const rp = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "rp",
    attributes,
    children
  };
};
