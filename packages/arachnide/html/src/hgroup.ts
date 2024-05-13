import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const hgroup = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "hgroup",
    attributes,
    children,
    reference
  });
};
