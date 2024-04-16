import { VirtualObjectElement } from "..";

export const a = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "a",
    attributes,
    children
  };
};
