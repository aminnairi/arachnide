import { VirtualObjectElement, CreateElementOptions, element } from "@arachnide/core";

export const abbr = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "abbr"
  });
};
