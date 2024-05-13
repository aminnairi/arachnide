import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const sub = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "sub",
    attributes,
    children,
    reference
  });
};
