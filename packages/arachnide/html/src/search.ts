import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const search = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "search",
    attributes,
    children,
    reference
  });
};
