import { CreateElementOptions, element } from "@arachnide/core";

export const br = (options: Omit<CreateElementOptions<HTMLBRElement>, "name" | "content">) => {
  return element({
    ...options,
    name: "br",
    content: []
  });
};
