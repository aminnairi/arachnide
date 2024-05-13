import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const bdi = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "bdi",
    attributes,
    children,
    reference
  });
};
