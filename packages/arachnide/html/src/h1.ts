import { VirtualObjectElement } from "@arachnide/core";

export const h1 = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "h1",
    attributes,
    children,
    reference
  };
};
