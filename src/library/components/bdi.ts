import { VirtualObjectElement } from "..";

export const bdi = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "bdi",
    attributes,
    children
  };
};
