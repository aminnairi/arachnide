import { VirtualObjectElement } from "@arachnide/core";

export const pre = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "pre",
    attributes,
    children,
    reference
  };
};
