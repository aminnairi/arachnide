import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const output = (options: Omit<CreateElementOptions<HTMLOutputElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "output"
  });
};
