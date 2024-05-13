import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const button = (options: Omit<CreateElementOptions<HTMLButtonElement>, "name">): VirtualObjectElement => {
  return element({
    name: "button",
    ...options
  });
};
