import { VirtualObjectElement } from "@arachnide/core";

export const sup = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "sup",
    attributes,
    children
  };
};