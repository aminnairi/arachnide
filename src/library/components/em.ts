import { VirtualObjectElement } from "..";

export const em = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "em",
    attributes,
    children
  };
};
