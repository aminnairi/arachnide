import { VirtualObjectElement } from "..";

export const hgroup = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "hgroup",
    attributes,
    children
  };
};
