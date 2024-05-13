import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h4 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "h4"
  });
};
