import { CreateElementOptions, element } from "@arachnide/core";

export const dialog = (options: Omit<CreateElementOptions<HTMLDialogElement>, "name">) => {
  return element({
    ...options,
    name: "dialog"
  });
};
