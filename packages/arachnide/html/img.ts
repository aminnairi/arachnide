import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface ImgAttributes extends VirtualHTMLElementAttributes {
  alt?: string,
  crossorigin?: "anonymous" | "use-credentials",
  decoding?: "sync" | "async" | "auto",
  elementtiming?: boolean,
  fetchpriority?: "high" | "low" | "auto",
  height?: number,
  ismap?: boolean,
  loading?: "eager" | "lazy",
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url",
  sizes?: string,
  src: string,
  srcset?: string,
  width?: number,
  usemap?: string,
}

export interface ImgOptions extends Omit<VirtualHTMLElement<HTMLImageElement>, "name" | "content"> {
  attributes?: ImgAttributes
}

export const img = (options: ImgOptions) => {
  return element({
    ...options,
    name: "img",
    content: []
  });
};
