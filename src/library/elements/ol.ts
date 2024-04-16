import { VirtualObjectElement } from "..";

export const ol = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "ol",
    attributes,
    children
  };
};
