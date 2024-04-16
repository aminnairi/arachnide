import { VirtualObjectElement } from "..";

export const footer = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "footer",
    attributes,
    children
  };
};
