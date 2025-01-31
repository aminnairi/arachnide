import { CreateElementOptions, element } from "@arachnide/core";

export const del = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "del"
  });
};
