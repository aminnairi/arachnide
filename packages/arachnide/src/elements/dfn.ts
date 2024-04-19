import { VirtualObjectElement } from "..";

export const dfn = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "dfn",
    attributes,
    children
  };
};
