import { CreateElementOptions, element } from "@arachnide/core";

export const time = (options: Omit<CreateElementOptions<HTMLTimeElement>, "name">) => {
  return element({
    ...options,
    name: "time"
  });
};
