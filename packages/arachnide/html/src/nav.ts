import { VirtualObjectElement } from "@arachnide/core";

export const nav = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "nav",
    attributes,
    children
  };
};
