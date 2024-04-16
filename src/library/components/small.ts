import { VirtualObjectElement } from "..";

export const small = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "small",
    attributes,
    children
  };
};
