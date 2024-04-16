import { VirtualObjectElement } from "..";

export const audio = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "audio",
    attributes,
    children
  };
};
