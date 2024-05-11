import { VirtualObjectElement } from "@arachnide/core";

export const bdo = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "bdo",
    attributes,
    children,
    reference
  };
};
