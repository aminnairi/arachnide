import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const progress = (options: Omit<CreateElementOptions<HTMLProgressElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "progress"
  });
};
