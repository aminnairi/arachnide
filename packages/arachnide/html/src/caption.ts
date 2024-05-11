import { VirtualObjectElement } from "@arachnide/core";

export const caption = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "caption",
    attributes,
    children,
    reference
  };
};
