import { VirtualObjectElement } from "@arachnide/core";

export const select = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "select",
    attributes,
    children,
    reference
  };
};
