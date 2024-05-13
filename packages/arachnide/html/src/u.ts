import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const u = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "u",
    attributes,
    children,
    reference
  });
};
