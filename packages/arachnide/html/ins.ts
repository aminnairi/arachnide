import { CreateElementOptions, element } from "@arachnide/core";

export const ins = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "ins"
  });
};
