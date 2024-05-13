import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const legend = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLLegendElement>, "name">): VirtualObjectElement => {
  return element({
    name: "legend",
    attributes,
    children,
    reference
  });
};
