import { CreateElementOptions, element } from "@arachnide/core";

export const menu = (options: Omit<CreateElementOptions<HTMLMenuElement>, "name">) => {
  return element({
    ...options,
    name: "menu"
  });
};
