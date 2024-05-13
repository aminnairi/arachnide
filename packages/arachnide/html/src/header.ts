import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const header = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "header",
    attributes,
    children,
    reference
  });
};
