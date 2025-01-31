import { CreateElementOptions, element } from "@arachnide/core";

export const article = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "article"
  });
};
