import { VirtualObjectElement } from "@arachnide/core";

export const form = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "form",
    attributes,
    children
  };
};
