import { CreateElementOptions, element } from "@arachnide/core";

export const table = (options: Omit<CreateElementOptions<HTMLTableElement>, "name">) => {
  return element({
    ...options,
    name: "table"
  });
};
