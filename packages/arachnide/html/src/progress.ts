import { CreateElementOptions, element } from "@arachnide/core";

export const progress = (options: Omit<CreateElementOptions<HTMLProgressElement>, "name">) => {
  return element({
    ...options,
    name: "progress"
  });
};
