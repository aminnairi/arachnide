import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const track = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTrackElement>, "name">): VirtualObjectElement => {
  return element({
    name: "track",
    attributes,
    content,
    reference
  });
};
