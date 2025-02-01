import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface ProgressAttributes extends VirtualHTMLElementAttributes {
  max?: number,
  value?: number,
}

export interface ProgressOptions extends Omit<VirtualHTMLElement<HTMLProgressElement>, "name"> {
  attributes?: ProgressAttributes,
}

export const progress = (options: ProgressOptions) => {
  return element({
    ...options,
    name: "progress"
  });
};
