import { CreateElementOptions, element } from "@arachnide/core";

export const code = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "code"
  });
};
