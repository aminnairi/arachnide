import { CreateElementOptions, element } from "@arachnide/core";

export const wbr = (options: Omit<CreateElementOptions<HTMLElement>, "name" | "content">) => {
  return element({
    ...options,
    name: "wbr",
    content: []
  });
};
