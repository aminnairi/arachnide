import { VirtualObjectElement } from "@arachnide/core";

export const output = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "output",
    attributes,
    children,
    reference
  };
};
