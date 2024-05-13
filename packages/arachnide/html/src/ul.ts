import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ul = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLUListElement>, "name">): VirtualObjectElement => {
  return element({
    name: "ul",
    attributes,
    children,
    reference
  });
};
