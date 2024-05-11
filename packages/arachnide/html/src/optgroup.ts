import { VirtualObjectElement } from "@arachnide/core";

export const optgroup = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "optgroup",
    attributes,
    children,
    reference
  };
};
