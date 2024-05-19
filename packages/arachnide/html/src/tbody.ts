import { CreateElementOptions, element } from "@arachnide/core";

export const tbody = (options: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">) => {
  return element({
    ...options,
    name: "tbody"
  });
};
