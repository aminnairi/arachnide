import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const samp = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "samp",
    attributes,
    children,
    reference
  });
};
