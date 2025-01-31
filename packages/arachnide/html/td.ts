import { CreateElementOptions, element } from "@arachnide/core";

export const td = (options: Omit<CreateElementOptions<HTMLTableCellElement>, "name">) => {
  return element({
    ...options,
    name: "td"
  });
};
