import { VirtualObjectElement } from "@arachnide/core";

export const i = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "i",
    attributes,
    children,
    reference
  };
};
