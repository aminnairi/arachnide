import { VirtualObjectElement } from "..";

export const td = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "td",
    attributes,
    children
  };
};
