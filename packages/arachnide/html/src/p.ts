import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const p = (options: Omit<CreateElementOptions<HTMLParagraphElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "p"
  });
};
