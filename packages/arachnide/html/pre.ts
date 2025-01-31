import { CreateElementOptions, element } from "@arachnide/core";

export const pre = (options: Omit<CreateElementOptions<HTMLPreElement>, "name">) => {
  return element({
    ...options,
    name: "pre"
  });
};
