import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const track = (options: Omit<CreateElementOptions<HTMLTrackElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "track"
  });
};
