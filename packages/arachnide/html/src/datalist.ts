import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const datalist = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLDataListElement>, "name">): VirtualObjectElement => {
  return element({
    name: "datalist",
    attributes,
    content,
    reference
  });
};
