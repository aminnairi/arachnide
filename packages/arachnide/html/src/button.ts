import { CreateElementOptions, element } from "@arachnide/core";

export const button = (options: Omit<CreateElementOptions<HTMLButtonElement>, "name">) => {
  return element({
    name: "button",
    ...options
  });
};
