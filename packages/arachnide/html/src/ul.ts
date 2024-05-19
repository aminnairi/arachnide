import { CreateElementOptions, element } from "@arachnide/core";

export const ul = (options: Omit<CreateElementOptions<HTMLUListElement>, "name">) => {
  return element({
    ...options,
    name: "ul"
  });
};
