import { VirtualObjectElement } from "..";

export const object = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "object",
    attributes,
    children
  };
};
