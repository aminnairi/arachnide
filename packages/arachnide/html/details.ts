import { CreateElementOptions, element } from "@arachnide/core";

export const details = (options: Omit<CreateElementOptions<HTMLDetailsElement>, "name">) => {
  return element({
    ...options,
    name: "details"
  });
};
