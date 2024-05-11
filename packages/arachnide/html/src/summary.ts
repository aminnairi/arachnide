import { VirtualObjectElement } from "@arachnide/core";

export const summary = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "summary",
    attributes,
    children,
    reference
  };
};
