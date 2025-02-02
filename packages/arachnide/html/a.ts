import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface AnchorAttributes extends VirtualHTMLElementAttributes<HTMLAnchorElement> {
  download?: string,
  href?: string,
  hreflang?: string,
  ping?: string,
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url",
  rel?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop",
  type?: string,
}

export interface AnchorOptions extends Omit<VirtualHTMLElement<HTMLAnchorElement>, "name"> {
  attributes?: AnchorAttributes
}

export const a = (options: AnchorOptions) => {
  return element({
    ...options,
    name: "a"
  });
};
