import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const tfoot = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">): VirtualObjectElement => {
  return element({
    name: "tfoot",
    attributes,
    children,
    reference
  });
};
