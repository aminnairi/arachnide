import { VirtualObjectElement } from "@arachnide/core";

export const button = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "button",
    attributes,
    children,
    reference
  };
};
