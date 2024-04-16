import { VirtualObjectElement } from "..";

export const iframe = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "iframe",
    attributes,
    children
  };
};
