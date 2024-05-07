import { VirtualObjectElement } from "@arachnide/core";

export const source = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "source",
    attributes,
    children
  };
};
