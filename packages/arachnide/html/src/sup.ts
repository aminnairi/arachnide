import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const sup = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "sup",
    attributes,
    children,
    reference
  });
};
