import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import DateSelector from "./DateSelector";
/// decide which of the differnet form fields
//are to be rendered based on the one particular prop

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DateSelector {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
