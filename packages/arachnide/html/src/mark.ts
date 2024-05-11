import { VirtualObjectElement } from "@arachnide/core";

export const mark = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "mark",
    attributes,
    children,
    reference
  };
};
