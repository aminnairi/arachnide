import { CreateElementOptions, element } from "@arachnide/core";

export const sub = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "sub"
  });
};
