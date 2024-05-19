import { CreateElementOptions, element } from "@arachnide/core";

export const form = (options: Omit<CreateElementOptions<HTMLFormElement>, "name">) => {
  return element({
    ...options,
    name: "form"
  });
};
