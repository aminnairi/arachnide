import { CreateElementOptions, element } from "@arachnide/core";

export const a = (options: Omit<CreateElementOptions<HTMLAnchorElement>, "name">) => {
  return element({
    ...options,
    name: "a"
  });
};
