import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const li = (options: Omit<CreateElementOptions<HTMLLIElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "li"
  });
};
