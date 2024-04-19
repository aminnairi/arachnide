import { VirtualObjectElement } from "..";

export const details = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "details",
    attributes,
    children
  };
};
