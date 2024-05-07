import { VirtualObjectElement } from "@arachnide/core";

export const map = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "map",
    attributes,
    children
  };
};
