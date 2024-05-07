import { VirtualObjectElement } from "@arachnide/core";

export const em = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "em",
    attributes,
    children
  };
};
