import { VirtualObjectElement } from "@arachnide/core";

export const option = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "option",
    attributes,
    children,
    reference
  };
};
