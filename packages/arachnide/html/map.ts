import { CreateElementOptions, element } from "@arachnide/core";

export const map = (options: Omit<CreateElementOptions<HTMLMapElement>, "name">) => {
  return element({
    ...options,
    name: "map"
  });
};
