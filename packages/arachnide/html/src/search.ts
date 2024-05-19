import { CreateElementOptions, element } from "@arachnide/core";

export const search = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "search"
  });
};
