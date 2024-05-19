import { CreateElementOptions, element } from "@arachnide/core";

export const figure = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "figure"
  });
};
