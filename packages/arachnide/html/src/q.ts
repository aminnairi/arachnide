import { CreateElementOptions, element } from "@arachnide/core";

export const q = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "q"
  });
};
