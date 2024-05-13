import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const small = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "small",
    attributes,
    children,
    reference
  });
};
