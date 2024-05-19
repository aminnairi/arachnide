import { CreateElementOptions, element } from "@arachnide/core";

export const h3 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">) => {
  return element({
    ...options,
    name: "h3"
  });
};
