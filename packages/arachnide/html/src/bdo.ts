import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const bdo = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "bdo",
    attributes,
    children,
    reference
  });
};
