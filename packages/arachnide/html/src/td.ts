import { VirtualObjectElement } from "@arachnide/core";

export const td = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "td",
    attributes,
    children
  };
};
