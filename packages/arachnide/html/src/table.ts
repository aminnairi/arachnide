import { VirtualObjectElement } from "@arachnide/core";

export const table = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "table",
    attributes,
    children
  };
};
