import { Formik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const navigate = useNavigate();
  const realUser = { email: "admin@gmail.com", password: "admin" };

  const { user, setUser } = useContext(LoginContext);
  return (
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
          if (values.email == realUser.email && values.password == realUser.password) {
            navigate("/home");
            setUser(values)
          } else {
            console.log("k.adı ya da şifre yanlış");
          }
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
        <>
          <div className="container mb-5 mt-3">
            <div className="row justify-content-center">
              <div className="col-lg-3">
                <h4 className="display-5 text-danger text-center mb-3">
                  Login
                </h4>
                <form
                  className="d-flex flex-column align-items-center"
                  onSubmit={handleSubmit}
                >
                  <p className="m-0"><span className="text-danger"> username:</span>admin@gmail.com</p>
                  <p className="p"><span className="text-danger"> password:</span> admin</p>
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
              </div>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Login;
