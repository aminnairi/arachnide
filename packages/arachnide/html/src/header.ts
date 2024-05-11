import { VirtualObjectElement } from "@arachnide/core";

export const header = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "header",
    attributes,
    children,
    reference
  };
};
