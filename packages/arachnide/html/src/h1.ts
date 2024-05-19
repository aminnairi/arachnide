import { CreateElementOptions, element } from "@arachnide/core";

export const h1 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">) => {
  return element({
    ...options,
    name: "h1"
  });
};
