import { VirtualObjectElement } from "@arachnide/core";

export const dfn = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dfn",
    attributes,
    children,
    reference
  };
};
