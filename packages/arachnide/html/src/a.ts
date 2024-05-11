import { VirtualObjectElement } from "@arachnide/core";

export const a = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "a",
    attributes,
    children,
    reference
  };
};
