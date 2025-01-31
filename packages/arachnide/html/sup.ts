import { CreateElementOptions, element } from "@arachnide/core";

export const sup = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "sup"
  });
};
