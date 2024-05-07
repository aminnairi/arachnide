import { VirtualObjectElement } from "@arachnide/core";

export const figure = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "figure",
    attributes,
    children
  };
};
