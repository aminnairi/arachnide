import { CreateElementOptions, element } from "@arachnide/core";

export const area = (options: Omit<CreateElementOptions<HTMLAreaElement>, "name" | "content">) => {
  return element({
    ...options,
    name: "area",
    content: []
  });
};
