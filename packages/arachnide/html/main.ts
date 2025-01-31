import { CreateElementOptions, element } from "@arachnide/core";

export const main = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "main"
  });
};
