import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const s = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "s",
    attributes,
    children,
    reference
  });
};
