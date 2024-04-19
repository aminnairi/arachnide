import { VirtualObjectElement } from "..";

export const br = ({ attributes }: Omit<VirtualObjectElement, "name" | "children">): VirtualObjectElement => {
  return {
    name: "br",
    attributes,
    children: []
  };
};
