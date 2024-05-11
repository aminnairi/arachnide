import { VirtualObjectElement } from "@arachnide/core";

export const blockquote = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "blockquote",
    attributes,
    children,
    reference
  };
};
