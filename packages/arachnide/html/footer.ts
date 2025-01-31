import { CreateElementOptions, element } from "@arachnide/core";

export const footer = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "footer"
  });
};
