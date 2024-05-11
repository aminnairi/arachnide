import { VirtualObjectElement } from "@arachnide/core";

export const dd = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dd",
    attributes,
    children,
    reference
  };
};
