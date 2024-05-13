import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const thead = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">): VirtualObjectElement => {
  return element({
    name: "thead",
    attributes,
    children,
    reference
  });
};
