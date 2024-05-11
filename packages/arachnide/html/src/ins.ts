import { VirtualObjectElement } from "@arachnide/core";

export const ins = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "ins",
    attributes,
    children,
    reference
  };
};
