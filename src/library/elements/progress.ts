import { VirtualObjectElement } from "..";

export const progress = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "progress",
    attributes,
    children
  };
};
