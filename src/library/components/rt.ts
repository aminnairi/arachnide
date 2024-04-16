import { VirtualObjectElement } from "..";

export const rt = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "rt",
    attributes,
    children
  };
};
