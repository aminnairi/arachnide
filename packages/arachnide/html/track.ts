import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface TrackAttributes extends VirtualHTMLElementAttributes<HTMLTrackElement> {
  default?: boolean,
  kind?: "subtitles" | "captions" | "chapters" | "metadata",
  label?: string,
  src: string,
  srclang?: string,
}

export interface TrackOptions extends Omit<VirtualHTMLElement<HTMLTrackElement>, "name"> {
  attributes?: TrackAttributes
}

export const track = (options: TrackOptions) => {
  return element({
    ...options,
    name: "track"
  });
};
