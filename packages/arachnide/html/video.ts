import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface VideoAttributes extends VirtualHTMLElementAttributes<HTMLVideoElement> {
  autoplay?: boolean,
  controls?: boolean,
  controlslist?: string,
  crossorigin?: "anonymous" | "use-credentials",
  disablepictureinpicture?: boolean,
  disableremoteplayback?: boolean,
  height?: number,
  loop?: boolean,
  muted?: boolean,
  playsinline?: boolean,
  poster?: string,
  preload?: "none" | "metadata" | "auto",
  src?: string,
  width?: number,
}

export interface VideoOptions extends Omit<VirtualHTMLElement<HTMLVideoElement>, "name"> {
  attributes?: VideoAttributes,
}

export const video = (options: VideoOptions) => {
  return element({
    ...options,
    name: "video"
  });
};
