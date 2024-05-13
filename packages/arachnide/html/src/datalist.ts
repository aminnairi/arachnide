import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const datalist = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLDataListElement>, "name">): VirtualObjectElement => {
  return element({
    name: "datalist",
    attributes,
    children,
    reference
  });
};
