import { CreateElementOptions, element } from "@arachnide/core";

export const object = (options: Omit<CreateElementOptions<HTMLObjectElement>, "name">) => {
  return element({
    ...options,
    name: "object"
  });
};
