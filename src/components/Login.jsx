import { Formik } from "formik";
import React from "react";

const Login = () => {
  return (
    <div className="container mb-5 mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-3">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Please enter a mail";
              } else if (!values.password) {
                errors.password = "Please enter a passoword";
                // alert("Please enter password")
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
                  placeholder="Enter an mail adress"
                />{" "}
                <br />
                <span className="text-danger mb-1">
                  {errors.email && touched.email && errors.email}
                </span>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="form-control"
                  placeholder="Enter an password"
                />
                <br />
                <span className="text-danger mb-1">
                  {errors.password && touched.password && errors.password}
                </span>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
              //   <form
              //     className="d-flex flex-column align-items-center"
              //     onSubmit={handleSubmit}
              //   >
              //     <input
              //       type="email"
              //       name="email"
              //       onChange={handleChange}
              //       onBlur={handleBlur}
              //       value={values.email}
              //       className="form-control"
              //     />{" "}
              //     <br />
              //     {errors.email && touched.email && errors.email}
              //     <input
              //       type="password"
              //       name="password"
              //       onChange={handleChange}
              //       onBlur={handleBlur}
              //       value={values.password}
              //       className="form-control"
              //     />
              //     <br />
              //     {errors.password && touched.password && errors.password}
              //     <button
              //       className="btn btn-primary"
              //       type="submit"
              //       disabled={isSubmitting}
              //     >
              //       Submit
              //     </button>
              //   </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
