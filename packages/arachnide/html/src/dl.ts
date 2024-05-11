import { VirtualObjectElement } from "@arachnide/core";

export const dl = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dl",
    attributes,
    children,
    reference
  };
};
