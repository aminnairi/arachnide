import { CreateElementOptions, element } from "@arachnide/core";

export const meter = (options: Omit<CreateElementOptions<HTMLMeterElement>, "name">) => {
  return element({
    ...options,
    name: "meter"
  });
};
