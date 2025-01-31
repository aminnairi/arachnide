import { CreateElementOptions, element } from "@arachnide/core";

export const section = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "section"
  });
};
