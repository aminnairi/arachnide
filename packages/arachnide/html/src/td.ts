import { VirtualObjectElement } from "@arachnide/core";

export const td = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "td",
    attributes,
    children,
    reference
  };
};
