import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const tr = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTableRowElement>, "name">): VirtualObjectElement => {
  return element({
    name: "tr",
    attributes,
    children,
    reference
  });
};
