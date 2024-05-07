import { VirtualObjectElement } from "@arachnide/core";

export const header = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "header",
    attributes,
    children
  };
};
