import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const option = (options: Omit<CreateElementOptions<HTMLOptionElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "option"
  });
};
