import { CreateElementOptions, element } from "@arachnide/core";

export const tr = (options: Omit<CreateElementOptions<HTMLTableRowElement>, "name">) => {
  return element({
    ...options,
    name: "tr"
  });
};
