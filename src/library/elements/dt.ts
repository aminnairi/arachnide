import { VirtualObjectElement } from "..";

export const dt = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dt",
    attributes,
    children
  };
};
