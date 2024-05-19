import { CreateElementOptions, element } from "@arachnide/core";

export const colgroup = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "colgroup"
  });
};
