import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const b = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "b",
    attributes,
    children,
    reference
  });
};
