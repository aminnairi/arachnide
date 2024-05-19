import { CreateElementOptions, element } from "@arachnide/core";

export const label = (options: Omit<CreateElementOptions<HTMLLabelElement>, "name">) => {
  return element({
    ...options,
    name: "label"
  });
};
