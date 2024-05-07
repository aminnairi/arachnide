import { VirtualObjectElement } from "@arachnide/core";

export const u = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "u",
    attributes,
    children
  };
};
