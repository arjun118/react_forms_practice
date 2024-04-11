import React from "react";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import TextError from "./TextError";
// import "../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css";
const DateSelector = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(value) => setFieldValue(name, value)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DateSelector;
