import { VirtualObjectElement } from "@arachnide/core";

export const wbr = ({ attributes }: Omit<VirtualObjectElement, "name" | "children">): VirtualObjectElement => {
  return {
    name: "wbr",
    attributes,
    children: []
  };
};
