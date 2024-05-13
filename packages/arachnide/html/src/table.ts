import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const table = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTableElement>, "name">): VirtualObjectElement => {
  return element({
    name: "table",
    attributes,
    children,
    reference
  });
};
