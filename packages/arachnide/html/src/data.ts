import { VirtualObjectElement } from "@arachnide/core";

export const data = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "data",
    attributes,
    children
  };
};
