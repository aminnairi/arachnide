import { VirtualObjectElement } from "@arachnide/core";

export const select = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "select",
    attributes,
    children
  };
};
