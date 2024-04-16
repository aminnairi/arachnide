import { VirtualObjectElement } from "..";

export const samp = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "samp",
    attributes,
    children
  };
};
