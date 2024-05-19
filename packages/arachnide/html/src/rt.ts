import { CreateElementOptions, element } from "@arachnide/core";

export const rt = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "rt"
  });
};
