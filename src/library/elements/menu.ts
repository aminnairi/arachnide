import { VirtualObjectElement } from "..";

export const menu = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "menu",
    attributes,
    children
  };
};
