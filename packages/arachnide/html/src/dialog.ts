import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dialog = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLDialogElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dialog",
    attributes,
    content,
    reference
  });
};
