import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const rt = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "rt"
  });
};
