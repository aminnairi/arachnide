import { VirtualObjectElement } from "@arachnide/core";

export const figure = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "figure",
    attributes,
    children,
    reference
  };
};
