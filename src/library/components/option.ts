import { VirtualObjectElement } from "..";

export const option = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "option",
    attributes,
    children
  };
};
