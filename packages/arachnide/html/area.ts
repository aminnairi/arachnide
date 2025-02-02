import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface AreaAttributes extends VirtualHTMLElementAttributes<HTMLAreaElement> {
  alt?: string,
  coords?: string,
  download?: string,
  href?: string,
  ping?: string,
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url",
  rel?: string,
  shape?: string,
  target?: "_self" | "_blank" | "_parent" | "_top",
}

export interface AreaOptions extends Omit<VirtualHTMLElement<HTMLAreaElement>, "name" | "content"> {
  attributes?: AreaAttributes
}

export const area = (options: AreaOptions) => {
  return element({
    ...options,
    name: "area",
    content: []
  });
};
