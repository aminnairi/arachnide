import { CreateElementOptions, element } from "@arachnide/core";

export const abbr = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "abbr"
  });
};
