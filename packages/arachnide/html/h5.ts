import { CreateElementOptions, element } from "@arachnide/core";

export const h5 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">) => {
  return element({
    ...options,
    name: "h5"
  });
};
