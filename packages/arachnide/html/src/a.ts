import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const a = (options: Omit<CreateElementOptions<HTMLAnchorElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "a"
  });
};
