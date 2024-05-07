import { VirtualObjectElement } from "@arachnide/core";

export const caption = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "caption",
    attributes,
    children
  };
};
