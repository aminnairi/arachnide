import { CreateElementOptions, element } from "@arachnide/core";

export const summary = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "summary"
  });
};
