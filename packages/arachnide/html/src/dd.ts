import { VirtualObjectElement } from "@arachnide/core";

export const dd = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dd",
    attributes,
    children
  };
};
