import { CreateElementOptions, element } from "@arachnide/core";

export const optgroup = (options: Omit<CreateElementOptions<HTMLOptGroupElement>, "name">) => {
  return element({
    ...options,
    name: "optgroup"
  });
};
