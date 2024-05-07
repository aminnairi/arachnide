import { VirtualObjectElement } from "@arachnide/core";

export const track = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "track",
    attributes,
    children
  };
};
