import { CreateElementOptions, element } from "@arachnide/core";

export const rp = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "rp"
  });
};
