import { CreateElementOptions, element } from "@arachnide/core";

export const ruby = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "ruby"
  });
};
