import { VirtualObjectElement } from "@arachnide/core";

export const dfn = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dfn",
    attributes,
    children
  };
};
