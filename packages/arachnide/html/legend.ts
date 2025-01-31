import { CreateElementOptions, element } from "@arachnide/core";

export const legend = (options: Omit<CreateElementOptions<HTMLLegendElement>, "name">) => {
  return element({
    ...options,
    name: "legend"
  });
};
