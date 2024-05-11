import { VirtualObjectElement } from "@arachnide/core";

export const dt = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dt",
    attributes,
    children,
    reference
  };
};
