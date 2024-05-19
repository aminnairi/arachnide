import { CreateElementOptions, element } from "@arachnide/core";

export const em = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "em"
  });
};
