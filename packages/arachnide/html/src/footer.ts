import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const footer = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "footer",
    attributes,
    children,
    reference
  });
};
