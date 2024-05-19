import { CreateElementOptions, element } from "@arachnide/core";

export const b = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "b"
  });
};
