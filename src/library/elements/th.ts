import { VirtualObjectElement } from "..";

export const th = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "th",
    attributes,
    children
  };
};
