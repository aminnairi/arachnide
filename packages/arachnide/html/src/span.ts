import { CreateElementOptions, element } from "@arachnide/core";

export const span = (options: Omit<CreateElementOptions<HTMLSpanElement>, "name">) => {
  return element({
    ...options,
    name: "span"
  });
};
