import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const select = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLSelectElement>, "name">): VirtualObjectElement => {
  return element({
    name: "select",
    attributes,
    children,
    reference
  });
};
