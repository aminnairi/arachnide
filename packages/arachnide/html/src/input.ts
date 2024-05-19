import { CreateElementOptions, element } from "@arachnide/core";

export const input = (options: Omit<CreateElementOptions<HTMLInputElement>, "name" | "content">) => {
  return element({
    ...options,
    name: "input",
    content: []
  });
};
