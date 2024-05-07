import { VirtualObjectElement } from "@arachnide/core";

export const div = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "div",
    attributes,
    children
  }
};
