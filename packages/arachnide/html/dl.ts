import { CreateElementOptions, element } from "@arachnide/core";

export const dl = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "dl"
  });
};
