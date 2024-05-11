import { VirtualObjectElement } from "@arachnide/core";

export const ol = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "ol",
    attributes,
    children,
    reference
  };
};
