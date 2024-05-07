import { VirtualObjectElement } from "@arachnide/core";

export const option = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "option",
    attributes,
    children
  };
};
