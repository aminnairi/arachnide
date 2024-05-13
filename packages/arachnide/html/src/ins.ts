import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ins = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "ins",
    attributes,
    children,
    reference
  });
};
