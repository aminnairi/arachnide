import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const data = (options: Omit<CreateElementOptions<HTMLDataElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "data"
  });
};
