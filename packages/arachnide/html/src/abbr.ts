import { VirtualObjectElement } from "@arachnide/core";

export const abbr = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "abbr",
    attributes,
    children
  };
};
