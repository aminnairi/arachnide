import { VirtualObjectElement } from "@arachnide/core";

export const iframe = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "iframe",
    attributes,
    children
  };
};
