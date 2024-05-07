import { VirtualObjectElement } from "@arachnide/core";

export const i = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "i",
    attributes,
    children
  };
};
