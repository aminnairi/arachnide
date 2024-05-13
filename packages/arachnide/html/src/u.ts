import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const u = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "u"
  });
};
