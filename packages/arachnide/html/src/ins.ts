import { VirtualObjectElement } from "@arachnide/core";

export const ins = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "ins",
    attributes,
    children
  };
};
