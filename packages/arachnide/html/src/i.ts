import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const i = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "i",
    attributes,
    children,
    reference
  });
};
