import { Formik } from "formik";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";


const Login = () => {
  const navigate = useNavigate();
  const realUser = { email: "admin@gmail.com", password: "admin" };

  const { user, setUser } = useContext(LoginContext);

  const googleLogin = (user) => {
    const decodedUser = jwtDecode(user.credential);
    const lsUser = { email: decodedUser.email, password: decodedUser.name };
    localStorage.setItem("user", JSON.stringify(lsUser));
    setUser(user)
    navigate("/home");
    console.log(decodedUser);
  };
  
  const deneme = () => {
  const username = '365';
const password = '1';
const loginUrl = 'https://api.baubuddy.de/index.php/login';
const loginData = JSON.stringify({username, password});
const loginHeaders = {
  'Authorization': 'Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz',
  'Content-Type': 'application/json'
};
const loginOptions = {
  headers: loginHeaders,
  data: loginData
};

axios.post(loginUrl, loginOptions)
  .then(response => {

    console.log(response,"buraa");
    
  })
  .then(response => {
    const data = response.data;
    // Process the data and create the table
  })
  .catch(error => console.error(error));
  }
  
  deneme()


  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Please enter a mail";
        } else if (!values.password) {
          errors.password = "Please enter a passoword";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if (
            values.email == realUser.email &&
            values.password == realUser.password
          ) {
            navigate("/home");
            setUser(values);
            const user = { email: values.email, password: values.password };
            localStorage.setItem("user", JSON.stringify(user));
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
                  <p className="m-0">
                    <span className="text-danger"> username:</span>
                    admin@gmail.com
                  </p>
                  <p className="p">
                    <span className="text-danger"> password:</span> admin
                  </p>
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
                  <span className="mt-2">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      googleLogin(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
            
                  </span>
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
