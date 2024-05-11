import { VirtualObjectElement } from "@arachnide/core";

export const textarea = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "textarea",
    attributes,
    children,
    reference
  };
};
