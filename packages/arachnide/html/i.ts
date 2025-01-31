import { CreateElementOptions, element } from "@arachnide/core";

export const i = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "i"
  });
};
