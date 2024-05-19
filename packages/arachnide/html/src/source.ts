import { CreateElementOptions, element } from "@arachnide/core";

export const source = (options: Omit<CreateElementOptions<HTMLSourceElement>, "name">) => {
  return element({
    ...options,
    name: "source"
  });
};
