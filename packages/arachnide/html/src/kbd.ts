import { VirtualObjectElement } from "@arachnide/core";

export const kbd = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "kbd",
    attributes,
    children
  };
};
