import { CreateElementOptions, element } from "@arachnide/core";

export const dd = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "dd"
  });
};
