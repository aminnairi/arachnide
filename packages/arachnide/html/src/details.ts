import { VirtualObjectElement } from "@arachnide/core";

export const details = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "details",
    attributes,
    children,
    reference
  };
};
