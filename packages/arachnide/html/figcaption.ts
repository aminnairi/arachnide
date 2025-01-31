import { CreateElementOptions, element } from "@arachnide/core";

export const figcaption = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "figcaption"
  });
};
