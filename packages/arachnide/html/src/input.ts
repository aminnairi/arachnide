import { VirtualObjectElement } from "@arachnide/core";

export const input = ({ attributes, reference }: Omit<VirtualObjectElement, "name" | "children">): VirtualObjectElement => {
  return {
    name: "input",
    attributes,
    children: [],
    reference
  };
};
