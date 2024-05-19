import { CreateElementOptions, element } from "@arachnide/core";

export const dt = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "dt"
  });
};
