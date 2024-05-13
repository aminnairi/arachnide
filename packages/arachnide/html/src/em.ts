import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const em = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "em",
    attributes,
    children,
    reference
  });
};
