//used to test the other components we will be creating?
//this is a single formik wrapper
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const FormikContainer = () => {
  const dropDownOptions = [
    { key: "select an option", value: "" },
    { key: "option1", value: "value1" },
    { key: "option2", value: "value2" },
    { key: "option3", value: "value3" },
  ];
  const radioOptions = [
    { key: "option1", value: "rvalue1" },
    { key: "option2", value: "rvalue2" },
    { key: "option3", value: "rvalue3" },
  ];
  const checkboxOptions = [
    { key: "option1", value: "cvalue1" },
    { key: "option2", value: "cvalue2" },
    { key: "option3", value: "cvalue3" },
  ];
  const initialValues = {
    email: "",
    comments: "initial comment",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    date: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    comments: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array()
      .min(1, "Should select atleast one item")
      .required("Required"),
    date: Yup.date().required("Required"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" label="Email" name="email" />

            <FormikControl
              control="textarea"
              label="Comments"
              name="comments"
            />

            <FormikControl
              control="select"
              label="Select an option"
              name="selectOption"
              options={dropDownOptions}
            />

            <FormikControl
              control="radio"
              label="Select a radio option"
              name="radioOption"
              options={radioOptions}
            />

            <FormikControl
              control="checkbox"
              label="Check what applies"
              name="checkboxOption"
              options={checkboxOptions}
            />

            <FormikControl
              control="date"
              label="Pick your birth date"
              name="date"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
