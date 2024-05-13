import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dialog = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLDialogElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dialog",
    attributes,
    children,
    reference
  });
};
