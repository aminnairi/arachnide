import { VirtualObjectElement } from "@arachnide/core";

export const textarea = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "textarea",
    attributes,
    children
  };
};
