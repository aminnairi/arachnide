import { CreateElementOptions, element } from "@arachnide/core";

export const caption = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "caption"
  });
};
