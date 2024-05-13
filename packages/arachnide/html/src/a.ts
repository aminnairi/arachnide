import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const a = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLAnchorElement>, "name">): VirtualObjectElement => {
  return element({
    name: "a",
    attributes,
    children,
    reference
  });
};
