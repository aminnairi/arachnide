import { CreateElementOptions, element } from "@arachnide/core";

export const th = (options: Omit<CreateElementOptions<HTMLTableCellElement>, "name">) => {
  return element({
    ...options,
    name: "th"
  });
};
