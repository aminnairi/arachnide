import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const li = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLLIElement>, "name">): VirtualObjectElement => {
  return element({
    name: "li",
    attributes,
    children,
    reference
  });
};
