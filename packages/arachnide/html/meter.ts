import { element, VirtualHTMLElement, VirtualHTMLElementAttributes } from "@arachnide/core";

export interface MeterAttributes extends VirtualHTMLElementAttributes<HTMLMeterElement> {
  value?: number,
  min?: number,
  max?: number,
  low?: number,
  high?: number,
  optimum?: number,
  form?: string,
}

export interface MeterOptions extends Omit<VirtualHTMLElement<HTMLMeterElement>, "name"> {
  attributes?: MeterAttributes,
}

export const meter = (options: MeterOptions) => {
  return element({
    ...options,
    name: "meter"
  });
};
