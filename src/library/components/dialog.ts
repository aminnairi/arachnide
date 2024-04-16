import { VirtualObjectElement } from "..";

export const dialog = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dialog",
    attributes,
    children
  };
};
