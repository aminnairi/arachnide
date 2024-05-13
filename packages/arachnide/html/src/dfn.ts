import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dfn = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dfn",
    attributes,
    children,
    reference
  });
};
