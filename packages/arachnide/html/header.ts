import { CreateElementOptions, element } from "@arachnide/core";

export const header = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "header"
  });
};
