import { CreateElementOptions, element } from "@arachnide/core";

export const hgroup = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "hgroup"
  });
};
