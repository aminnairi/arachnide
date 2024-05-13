import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const div = (options: Omit<CreateElementOptions<HTMLDivElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "div"
  });
};
