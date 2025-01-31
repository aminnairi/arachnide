import { CreateElementOptions, element } from "@arachnide/core";

export const strong = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "strong"
  });
};
