import { CreateElementOptions, element } from "@arachnide/core";

export const tfoot = (options: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">) => {
  return element({
    ...options,
    name: "tfoot"
  });
};
