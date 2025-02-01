import { CreateElementOptions, element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface FormAttributes extends VirtualHTMLElementAttributes {
  acceptCharset?: string,
  autocomplete?: "off" | "on",
  name?: string,
  // TODO: provide better fenced values here for the rel attributes of the form tag
  rel?: string,
  action?: string,
  enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain",
  method?: "get" | "post" | "dialog",
  novalidate?: boolean,
  target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop",
}

export interface FormOptions extends Omit<VirtualHTMLElement<HTMLFormElement>, "name"> {
  attributes?: FormAttributes,
}

export const form = (options: Omit<CreateElementOptions<HTMLFormElement>, "name">) => {
  return element({
    ...options,
    name: "form"
  });
};
