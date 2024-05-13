import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const fieldset = (options: Omit<CreateElementOptions<HTMLFieldSetElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "fieldset"
  });
};
