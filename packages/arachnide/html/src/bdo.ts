import { CreateElementOptions, element } from "@arachnide/core";

export const bdo = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "bdo"
  });
};
