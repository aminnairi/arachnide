import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const datalist = (options: Omit<CreateElementOptions<HTMLDataListElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "datalist"
  });
};
