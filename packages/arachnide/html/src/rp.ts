import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const rp = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "rp",
    attributes,
    children,
    reference
  });
};
