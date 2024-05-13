import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const mark = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "mark"
  });
};
