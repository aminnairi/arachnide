import { CreateElementOptions, element } from "@arachnide/core";

export const samp = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "samp"
  });
};
