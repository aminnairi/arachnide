import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const sup = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "sup"
  });
};
