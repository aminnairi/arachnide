import { VirtualObjectElement } from "@arachnide/core";

export const figcaption = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "figcaption",
    attributes,
    children
  };
};
