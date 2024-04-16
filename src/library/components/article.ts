import { VirtualObjectElement } from "..";

export const article = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "article",
    attributes,
    children
  };
};
