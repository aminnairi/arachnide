import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dt = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dt",
    attributes,
    children,
    reference
  });
};
