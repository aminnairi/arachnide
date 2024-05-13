import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const section = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "section"
  });
};
