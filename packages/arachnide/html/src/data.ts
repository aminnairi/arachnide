import { VirtualObjectElement } from "@arachnide/core";

export const data = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "data",
    attributes,
    children,
    reference
  };
};
