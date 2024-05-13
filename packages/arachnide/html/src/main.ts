import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const main = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "main",
    attributes,
    children,
    reference
  });
};
