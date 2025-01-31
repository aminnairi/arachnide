import { CreateElementOptions, element } from "@arachnide/core";

export const nav = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "nav"
  });
};
