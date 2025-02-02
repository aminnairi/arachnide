import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface OptionAttributes extends VirtualHTMLElementAttributes<HTMLOptionElement> {
  disabled?: boolean,
  label?: string,
  selected?: boolean,
  value?: string,
}

export interface OptionOptions extends Omit<VirtualHTMLElement<HTMLOptionElement>, "name"> {
  attributes?: OptionAttributes,
}

export const option = (options: OptionOptions) => {
  return element({
    ...options,
    name: "option"
  });
};
