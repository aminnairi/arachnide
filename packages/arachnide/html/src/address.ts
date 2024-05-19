import { CreateElementOptions, element } from "@arachnide/core";

export const address = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "address"
  });
};
