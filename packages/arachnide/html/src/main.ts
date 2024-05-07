import { VirtualObjectElement } from "@arachnide/core";

export const main = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "main",
    attributes,
    children
  };
};
