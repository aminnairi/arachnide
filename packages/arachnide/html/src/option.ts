import { CreateElementOptions, element } from "@arachnide/core";

export const option = (options: Omit<CreateElementOptions<HTMLOptionElement>, "name">) => {
  return element({
    ...options,
    name: "option"
  });
};
