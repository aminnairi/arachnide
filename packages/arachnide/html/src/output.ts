import { VirtualObjectElement } from "@arachnide/core";

export const output = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "output",
    attributes,
    children
  };
};
