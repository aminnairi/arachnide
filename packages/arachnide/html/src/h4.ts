import { VirtualObjectElement } from "@arachnide/core";

export const h4 = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "h4",
    attributes,
    children,
    reference
  };
};
