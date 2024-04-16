import { VirtualObjectElement } from "..";

export const textarea = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "textarea",
    attributes,
    children
  };
};
