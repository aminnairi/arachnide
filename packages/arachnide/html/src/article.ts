import { VirtualObjectElement } from "@arachnide/core";

export const article = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "article",
    attributes,
    children
  };
};
