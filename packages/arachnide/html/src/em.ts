import { VirtualObjectElement } from "@arachnide/core";

export const em = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "em",
    attributes,
    children,
    reference
  };
};
