import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface AudioAttributes extends VirtualHTMLElementAttributes<HTMLAudioElement> {
  autoplay?: boolean,
  controls?: boolean,
  // TODO: provide an array and turn this array into an HTML enumerated list
  controlslist?: string,
  // TODO: provide an array and turn this array into an HTML enumerated list
  crossorigin?: string,
  disableremoteplayback?: boolean,
  loop?: boolean,
  muted?: boolean,
  // TODO: provide an array and turn this array into an HTML enumerated list
  preload?: string,
  src?: string
}

export interface AudioOptions extends Omit<VirtualHTMLElement<HTMLAudioElement>, "name"> {
  attributes?: AudioAttributes
}

export const audio = (options: AudioOptions) => {
  return element({
    ...options,
    name: "audio"
  });
};
