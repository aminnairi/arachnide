import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface IframeAttributes extends VirtualHTMLElementAttributes<HTMLIFrameElement> {
  allow?: string,
  allowfullscreen?: boolean,
  height?: number,
  loading?: "eager" | "lazy",
  name?: string,
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url",
  // TODO: provide an array of possible values and turn it into a space-delimited string
  sandbox?: string,
  src?: string,
  srcdoc?: string,
  width?: number,
}

export interface IframeOptions extends Omit<VirtualHTMLElement<HTMLIFrameElement>, "name"> {
  attributes?: IframeAttributes
}

export const iframe = (options: IframeOptions) => {
  return element({
    ...options,
    name: "iframe"
  });
};
