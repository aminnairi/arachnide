import { CreateElementOptions, element } from "@arachnide/core";

export const embed = (options: Omit<CreateElementOptions<HTMLEmbedElement>, "name">) => {
  return element({
    ...options,
    name: "embed"
  });
};
