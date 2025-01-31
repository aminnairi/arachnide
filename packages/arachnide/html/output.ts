import { CreateElementOptions, element } from "@arachnide/core";

export const output = (options: Omit<CreateElementOptions<HTMLOutputElement>, "name">) => {
  return element({
    ...options,
    name: "output"
  });
};
