import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h5 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "h5"
  });
};
