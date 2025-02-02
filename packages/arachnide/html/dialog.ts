import { CreateElementOptions, element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface DialogAttributes extends VirtualHTMLElementAttributes<HTMLDialogElement> {
  open?: boolean,
}

export interface DialogOptions extends Omit<VirtualHTMLElement<HTMLDialogElement>, "name"> {
  attributes?: DialogAttributes
}

export const dialog = (options: Omit<CreateElementOptions<HTMLDialogElement>, "name">) => {
  return element({
    ...options,
    name: "dialog"
  });
};
