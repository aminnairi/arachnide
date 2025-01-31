import { CreateElementOptions, element } from "@arachnide/core";

export const kbd = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "kbd"
  });
};
