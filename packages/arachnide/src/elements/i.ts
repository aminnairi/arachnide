import { VirtualObjectElement } from "..";

export const i = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "i",
    attributes,
    children
  };
};
