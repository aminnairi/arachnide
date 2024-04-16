import { VirtualObjectElement } from "..";

export const video = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "video",
    attributes,
    children
  };
};
