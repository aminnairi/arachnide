import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const form = (options: Omit<CreateElementOptions<HTMLFormElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "form"
  });
};
