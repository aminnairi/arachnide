import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const tbody = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">): VirtualObjectElement => {
  return element({
    name: "tbody",
    attributes,
    children,
    reference
  });
};
