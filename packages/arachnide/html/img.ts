import { CreateElementOptions, element } from "@arachnide/core";

export const img = (options: Omit<CreateElementOptions<HTMLImageElement>, "name" | "content">) => {
  return element({
    ...options,
    name: "img",
    content: []
  });
};
