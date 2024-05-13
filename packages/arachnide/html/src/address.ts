import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const address = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "address",
    attributes,
    children,
    reference
  });
};
