import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/userSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import photoLogin from "./photoLogin.avif";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    errors: userErrors,
    isAuth,
    role,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuth && role === "user") Navigate("/Profile");
    if (isAuth && role === "admin") Navigate("/Dashboard");
  }, []);

  const {
    register: loginInfo,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const userInfo = (data) => {
    dispatch(loginUser({ data, navigate }));
  };

  return (
    <div className="LoginPage">
      <div className="ImgLogin">
        <img src={photoLogin} alt="" />
      </div>
      <div className="FormLogin">
        <h1>Sign into your account</h1>
        <form onSubmit={handleSubmit(userInfo)}>
          <label>Email</label>
          <input
            className="FormInput1"
            type="text"
            placeholder="Enter your email"
            {...loginInfo("email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "invalid email",
              },
            })}
          />{" "}
          {errors.email?.message}
          <br />
          <label>Password</label>
          <input
            className="FormInput2"
            type="password"
            placeholder="Enter your Password"
            {...loginInfo("password", {
              required: true,
            })}
          />
          {errors.password?.message}
          <br />
          {/*{userErrors && userErrors}*/}
          <button>Login</button>
          <div className="btnRegister">
            <p>don't have an account ?</p>
            <Link to="/RegisterPage">Register here</Link>
          </div>
          <div className="ForgotPassword">
            <Link to="/ForgetPassword">Forgot your password ?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
