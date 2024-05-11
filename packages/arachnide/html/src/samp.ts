import { VirtualObjectElement } from "@arachnide/core";

export const samp = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "samp",
    attributes,
    children,
    reference
  };
};
