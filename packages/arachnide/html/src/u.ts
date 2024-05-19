import { CreateElementOptions, element } from "@arachnide/core";

export const u = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "u"
  });
};
