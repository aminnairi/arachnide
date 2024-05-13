import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dd = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dd",
    attributes,
    children,
    reference
  });
};
