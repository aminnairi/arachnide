import { VirtualObjectElement } from "@arachnide/core";

export const hgroup = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "hgroup",
    attributes,
    children
  };
};
