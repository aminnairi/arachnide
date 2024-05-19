import { CreateElementOptions, element } from "@arachnide/core";

export const blockquote = (options: Omit<CreateElementOptions<HTMLElement>, "name">) => {
  return element({
    ...options,
    name: "blockquote"
  });
};
