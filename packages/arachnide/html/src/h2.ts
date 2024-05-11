import { VirtualObjectElement } from "@arachnide/core";

export const h2 = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "h2",
    attributes,
    children,
    reference
  };
};
