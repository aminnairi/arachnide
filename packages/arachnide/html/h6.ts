import { CreateElementOptions, element } from "@arachnide/core";

export const h6 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">) => {
  return element({
    ...options,
    name: "h6"
  });
};
