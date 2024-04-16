import { VirtualObjectElement } from "..";

export const summary = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "summary",
    attributes,
    children
  };
};
