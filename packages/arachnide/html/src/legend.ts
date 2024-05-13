import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const legend = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLLegendElement>, "name">): VirtualObjectElement => {
  return element({
    name: "legend",
    attributes,
    content,
    reference
  });
};
