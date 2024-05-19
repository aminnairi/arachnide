import { CreateElementOptions, element } from "@arachnide/core";

export const textarea = (options: Omit<CreateElementOptions<HTMLTextAreaElement>, "name">) => {
  return element({
    ...options,
    name: "textarea"
  });
};
