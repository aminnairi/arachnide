import { VirtualObjectElement } from "..";

export const tbody = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "tbody",
    attributes,
    children
  };
};
