import { VirtualObjectElement } from "@arachnide/core";

export const progress = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "progress",
    attributes,
    children
  };
};
