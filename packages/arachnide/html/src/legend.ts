import { VirtualObjectElement } from "@arachnide/core";

export const legend = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "legend",
    attributes,
    children,
    reference
  };
};
