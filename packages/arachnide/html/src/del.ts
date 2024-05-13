import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const del = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "del",
    attributes,
    children,
    reference
  });
};
