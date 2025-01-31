import { CreateElementOptions, element } from "@arachnide/core";

export const small = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "small"
  });
};
