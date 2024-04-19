import { VirtualObjectElement } from "..";

export const meter = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "meter",
    attributes,
    children
  };
};
