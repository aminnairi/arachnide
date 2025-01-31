import { CreateElementOptions, element } from "@arachnide/core";

export const datalist = (options: Omit<CreateElementOptions<HTMLDataListElement>, "name">) => {
  return element({
    ...options,
    name: "datalist"
  });
};
