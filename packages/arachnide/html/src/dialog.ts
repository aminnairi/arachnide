import { VirtualObjectElement } from "@arachnide/core";

export const dialog = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dialog",
    attributes,
    children,
    reference
  };
};
