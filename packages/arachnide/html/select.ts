import { CreateElementOptions, element } from "@arachnide/core";

export const select = (options: Omit<CreateElementOptions<HTMLSelectElement>, "name">) => {
  return element({
    ...options,
    name: "select"
  });
};
