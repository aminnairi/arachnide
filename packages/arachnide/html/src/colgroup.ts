import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const colgroup = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "colgroup",
    attributes,
    children,
    reference
  });
};
