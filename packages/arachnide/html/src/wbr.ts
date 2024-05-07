import { VirtualObjectElement } from "@arachnide/core";

export const wbr = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "wbr",
    attributes,
    children
  };
};
