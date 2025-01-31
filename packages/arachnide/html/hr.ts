import { CreateElementOptions, element } from "@arachnide/core";

export const hr = (options: Omit<CreateElementOptions<HTMLHRElement>, "name" | "content">) => {
  return element({
    ...options,
    name: "hr",
    content: []
  });
};
