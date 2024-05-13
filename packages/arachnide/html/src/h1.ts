import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h1 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "h1"
  });
};
