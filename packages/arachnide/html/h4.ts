import { CreateElementOptions, element } from "@arachnide/core";

export const h4 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">) => {
  return element({
    ...options,
    name: "h4"
  });
};
