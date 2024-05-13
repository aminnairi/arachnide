import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const portal = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "portal",
    attributes,
    children,
    reference
  });
};
