import { VirtualObjectElement } from "@arachnide/core";

export const bdo = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "bdo",
    attributes,
    children
  };
};
