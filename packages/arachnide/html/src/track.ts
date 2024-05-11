import { VirtualObjectElement } from "@arachnide/core";

export const track = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "track",
    attributes,
    children,
    reference
  };
};
