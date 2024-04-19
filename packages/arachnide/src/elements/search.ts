import { VirtualObjectElement } from "..";

export const search = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "search",
    attributes,
    children
  };
};
