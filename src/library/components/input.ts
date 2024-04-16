import { VirtualObjectElement } from "..";

export const input = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "input",
    attributes,
    children
  };
};
