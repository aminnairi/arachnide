import { VirtualObjectElement } from "..";

export const sub = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "sub",
    attributes,
    children
  };
};
