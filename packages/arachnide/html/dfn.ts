import { CreateElementOptions, element } from "@arachnide/core";

export const dfn = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "dfn"
  });
};
