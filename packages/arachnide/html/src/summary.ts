import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const summary = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "summary"
  });
};
