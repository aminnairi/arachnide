import { VirtualObjectElement } from "..";

export const mark = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "mark",
    attributes,
    children
  };
};
