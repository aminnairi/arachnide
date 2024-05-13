import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const iframe = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLIFrameElement>, "name">): VirtualObjectElement => {
  return element({
    name: "iframe",
    attributes,
    children,
    reference
  });
};
