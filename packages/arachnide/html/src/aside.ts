import { CreateElementOptions, element } from "@arachnide/core";

export const aside = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "aside"
  });
};
