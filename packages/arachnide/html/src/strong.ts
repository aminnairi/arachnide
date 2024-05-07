import { VirtualObjectElement } from "@arachnide/core";

export const strong = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "strong",
    attributes,
    children
  };
};
