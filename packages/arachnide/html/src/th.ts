import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const th = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTableCellElement>, "name">): VirtualObjectElement => {
  return element({
    name: "th",
    attributes,
    children,
    reference
  });
};
