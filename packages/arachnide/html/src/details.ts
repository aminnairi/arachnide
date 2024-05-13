import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const details = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLDetailsElement>, "name">): VirtualObjectElement => {
  return element({
    name: "details",
    attributes,
    children,
    reference
  });
};
