import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const meter = (options: Omit<CreateElementOptions<HTMLMeterElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "meter"
  });
};
