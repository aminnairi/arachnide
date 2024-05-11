import { VirtualObjectElement } from "@arachnide/core";

export const aside = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "aside",
    attributes,
    children,
    reference
  };
};
