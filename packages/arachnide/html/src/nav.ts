import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const nav = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "nav",
    attributes,
    children,
    reference
  });
};
