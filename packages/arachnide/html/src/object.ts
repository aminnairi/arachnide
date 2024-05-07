import { VirtualObjectElement } from "@arachnide/core";

export const object = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "object",
    attributes,
    children
  };
};