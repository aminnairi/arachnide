import { CreateElementOptions, element } from "@arachnide/core";

export const thead = (options: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">) => {
  return element({
    ...options,
    name: "thead"
  });
};
