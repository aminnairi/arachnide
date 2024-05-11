import { VirtualObjectElement } from "@arachnide/core";

export const search = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "search",
    attributes,
    children,
    reference
  };
};
