import { VirtualObjectElement } from "..";

export const button = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "button",
    attributes,
    children
  };
};
