import { VirtualObjectElement } from "@arachnide/core";

export const ul = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "ul",
    attributes,
    children,
    reference
  };
};
