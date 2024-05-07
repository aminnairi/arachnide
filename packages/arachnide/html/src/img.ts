import { VirtualObjectElement } from "@arachnide/core";

export const img = ({ attributes }: Omit<VirtualObjectElement, "name" | "children">): VirtualObjectElement => {
  return {
    name: "img",
    attributes,
    children: []
  };
};
