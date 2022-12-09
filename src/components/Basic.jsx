import React from "react";
import { Formik } from "formik";

const Basic = () => (
  <div className="container m-5 d-flex flex-column w-50 mx-auto">
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Please enter a mail";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          className="d-flex flex-column align-items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="form-control"
          />{" "}
          <br />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className="form-control"
          />
          <br />
          {errors.password && touched.password && errors.password}
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
