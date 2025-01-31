import { CreateElementOptions, element } from "@arachnide/core";

export const cite = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "cite"
  });
};
