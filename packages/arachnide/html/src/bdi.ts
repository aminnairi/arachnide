import { VirtualObjectElement } from "@arachnide/core";

export const bdi = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "bdi",
    attributes,
    children
  };
};
