import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dl = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dl",
    attributes,
    children,
    reference
  });
};
