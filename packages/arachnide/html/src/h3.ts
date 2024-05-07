import { VirtualObjectElement } from "@arachnide/core";

export const h3 = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "h3",
    attributes,
    children
  };
};
