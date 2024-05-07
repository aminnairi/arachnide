import { VirtualObjectElement } from "@arachnide/core";

export const label = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "label",
    attributes,
    children
  };
};
