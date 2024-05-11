import { VirtualObjectElement } from "@arachnide/core";

export const table = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "table",
    attributes,
    children,
    reference
  };
};
