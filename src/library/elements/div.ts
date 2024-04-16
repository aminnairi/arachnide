import { VirtualObjectElement } from "..";

export const div = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "div",
    attributes,
    children
  }
};
