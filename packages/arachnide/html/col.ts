import { CreateElementOptions, element } from "@arachnide/core";

export const col = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "col"
  });
};
