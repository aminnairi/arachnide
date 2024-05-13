import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const time = (options: Omit<CreateElementOptions<HTMLTimeElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "time"
  });
};
