import { VirtualObjectElement } from "@arachnide/core";

export const dl = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dl",
    attributes,
    children
  };
};
