import { VirtualObjectElement } from "@arachnide/core";

export const dt = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dt",
    attributes,
    children
  };
};
