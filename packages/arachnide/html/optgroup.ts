import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface OptgroupAttributes extends VirtualHTMLElementAttributes<HTMLOptGroupElement> {
  disabled?: boolean,
  label?: string,
}

export interface OptgroupOptions extends Omit<VirtualHTMLElement<HTMLOptGroupElement>, "name"> {
  attributes?: OptgroupAttributes,
}

export const optgroup = (options: OptgroupOptions) => {
  return element({
    ...options,
    name: "optgroup"
  });
};
