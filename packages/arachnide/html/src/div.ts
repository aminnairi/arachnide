import { CreateElementOptions, element } from "@arachnide/core";

export const div = (options: Omit<CreateElementOptions<HTMLDivElement>, "name">) => {
  return element({
    ...options,
    name: "div"
  });
};
