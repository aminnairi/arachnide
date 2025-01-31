import { CreateElementOptions, element } from "@arachnide/core";

export const p = (options: Omit<CreateElementOptions<HTMLParagraphElement>, "name">) => {
  return element({
    ...options,
    name: "p"
  });
};
