import { CreateElementOptions, element } from "@arachnide/core";

export const mark = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "mark"
  });
};
