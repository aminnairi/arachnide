import { VirtualObjectElement } from "@arachnide/core";

export const summary = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "summary",
    attributes,
    children
  };
};
