import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const legend = (options: Omit<CreateElementOptions<HTMLLegendElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "legend"
  });
};
