import { VirtualObjectElement } from "@arachnide/core";

export const portal = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "portal",
    attributes,
    children,
    reference
  };
};
