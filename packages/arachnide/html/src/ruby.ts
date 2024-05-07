import { VirtualObjectElement } from "@arachnide/core";

export const ruby = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "ruby",
    attributes,
    children
  };
};