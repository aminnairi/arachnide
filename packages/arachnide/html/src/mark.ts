import { VirtualObjectElement } from "@arachnide/core";

export const mark = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "mark",
    attributes,
    children
  };
};
