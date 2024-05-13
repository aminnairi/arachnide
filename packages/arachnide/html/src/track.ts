import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const track = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTrackElement>, "name">): VirtualObjectElement => {
  return element({
    name: "track",
    attributes,
    children,
    reference
  });
};
