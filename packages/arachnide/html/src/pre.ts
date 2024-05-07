import { VirtualObjectElement } from "@arachnide/core";

export const pre = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "pre",
    attributes,
    children
  };
};
