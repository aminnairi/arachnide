import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const td = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTableCellElement>, "name">): VirtualObjectElement => {
  return element({
    name: "td",
    attributes,
    children,
    reference
  });
};
