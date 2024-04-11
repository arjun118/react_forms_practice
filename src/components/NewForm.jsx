import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  phnos: [""],
  address: "",
  // keys  correspond to name attrs of the indiviual field
};

const onSubmit = (values, onSubmitProps) => {
  setTimeout(() => {
    console.log("ok");
  }, 3000);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});
const YoutubeForm = () => {
  //   console.log(formik.values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field as="input" type="text" name="name" id="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div>
              <label htmlFor="email"> Email </label>
              <Field name="email" id="email" />

              <ErrorMessage name="email">
                {(errorMsg) => {
                  return <div className="error">{errorMsg}</div>;
                }}
              </ErrorMessage>
            </div>

            <div>
              <label htmlFor="channel"> channel </label>
              <Field name="channel" id="channel" />
              <ErrorMessage name="channel" />
            </div>

            <div>
              <label htmlFor="address">address</label>
              <Field name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>

            <div>
              <label htmlFor="phnos">List of Phone numbers</label>
              <FieldArray name="phnos">
                {(fieldArrayProps) => {
                  const { push, remove, form, pop } = fieldArrayProps;
                  const { values } = form;
                  const { phnos } = values;

                  return (
                    <div>
                      {phnos.map((no, index) => (
                        <div key={index}>
                          <Field name={`phnos[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => pop()}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
