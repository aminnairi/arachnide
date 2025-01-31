import { CreateElementOptions, element } from "@arachnide/core";

export const li = (options: Omit<CreateElementOptions<HTMLLIElement>, "name">) => {
  return element({
    ...options,
    name: "li"
  });
};
