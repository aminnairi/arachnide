import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dt = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "dt"
  });
};
