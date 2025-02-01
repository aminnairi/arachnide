import { element } from "@arachnide/core";
import { styles } from "@arachnide/css";
import { ButtonOptions, InputOptions, LabelOptions } from "@arachnide/html";

export const button = ({ content, attributes }: ButtonOptions) => {
  const buttonStyle = styles({
    backgroundColor: "black",
    padding: "5px 10px",
    margin: "5px",
    fontFamily: "sans-serif",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  });

  return element({
    name: "button",
    content,
    attributes: {
      ...attributes,
      style: buttonStyle ?? "" + attributes?.style ?? ""
    }
  });
}

export const input = ({ attributes }: InputOptions) => {
  const inputStyle = styles({
    borderRadius: "5px",
    padding: "5px 10px",
    margin: "5px",
    fontFamily: "sans-serif",
    color: "black",
    display: "block",
    width: "100%",
    border: "1px solid grey"
  });

  return element({
    name: "input",
    attributes: {
      ...attributes,
      style: inputStyle ?? "" + attributes?.style ?? ""
    }
  });
}

export const label = ({ content, attributes }: LabelOptions) => {
  const labelStyle = styles({
    fontFamily: "sans-serif",
    color: "black",
    padding: "5px"
  });

  return element({
    name: "label",
    content,
    attributes: {
      ...attributes,
      style: labelStyle ?? "" + attributes?.style ?? ""
    }
  });
};
