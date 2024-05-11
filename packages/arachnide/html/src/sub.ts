import { VirtualObjectElement } from "@arachnide/core";

export const sub = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "sub",
    attributes,
    children,
    reference
  };
};
