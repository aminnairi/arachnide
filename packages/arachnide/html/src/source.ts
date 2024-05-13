import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const source = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLSourceElement>, "name">): VirtualObjectElement => {
  return element({
    name: "source",
    attributes,
    children,
    reference
  });
};
