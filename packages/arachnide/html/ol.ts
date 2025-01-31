import { CreateElementOptions, element } from "@arachnide/core";

export const ol = (options: Omit<CreateElementOptions<HTMLOListElement>, "name">) => {
  return element({
    ...options,
    name: "ol"
  });
};
