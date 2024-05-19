import { CreateElementOptions, element } from "@arachnide/core";

export const h2 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">) => {
  return element({
    ...options,
    name: "h2"
  });
};
