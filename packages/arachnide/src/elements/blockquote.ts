import { VirtualObjectElement } from "..";

export const blockquote = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "blockquote",
    attributes,
    children
  };
};
