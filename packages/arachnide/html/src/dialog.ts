import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dialog = (options: Omit<CreateElementOptions<HTMLDialogElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "dialog"
  });
};
