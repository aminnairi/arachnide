import { CreateElementOptions, element } from "@arachnide/core";

export const portal = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "portal"
  });
};
