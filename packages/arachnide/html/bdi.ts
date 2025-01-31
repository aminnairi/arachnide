import { CreateElementOptions, element } from "@arachnide/core";

export const bdi = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "bdi"
  });
};
