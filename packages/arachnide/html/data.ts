import { CreateElementOptions, element } from "@arachnide/core";

export const data = (options: Omit<CreateElementOptions<HTMLDataElement>, "name">) => {
  return element({
    ...options,
    name: "data"
  });
};
