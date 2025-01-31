import { CreateElementOptions, element } from "@arachnide/core";

export const fieldset = (options: Omit<CreateElementOptions<HTMLFieldSetElement>, "name">) => {
  return element({
    ...options,
    name: "fieldset"
  });
};
