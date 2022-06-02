import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import photoLogin from "./photoLogin.avif";
import { useState } from "react";

const RegisterPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { errors: userErrors } = useSelector((state) => state.user);

  const userInfo = (data) => {
    dispatch(registerUser({ data, navigate }));
  };

  return (
    <div className="LoginPage">
      <div className="ImgLogin">
        <img src={photoLogin} alt="" />
      </div>
      <div className="FormLogin">
        <h1>Create your account</h1>
        <form onSubmit={handleSubmit(userInfo)}>
          <label>FirstName</label>
          <input
            className="FormInput1"
            type="text"
            placeholder="Enter your firstName"
            {...register("firstName", {
              required: true,
            })}
          />
          {errors.FirstName?.message}
          <br />
          <label>LastName</label>
          <input
            className="FormInput3"
            type="text"
            placeholder="Enter your lastName"
            {...register("lastName", {
              required: true,
            })}
          />{" "}
          {errors.LastName?.message}
          <br />
          <label>Email</label>
          <input
            className="FormInput4"
            type="text"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "invalid email",
              },
            })}
          />
          {errors.email?.message}
          <br />
          <label>Password</label>
          <input
            className="FormInput5"
            type="password"
            placeholder="Enter your Password"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "password should be at least 6 characters",
              },
            })}
          />
          <div className="postuler">
            <div className="PostulerCheckbox">
              <p>Are you instructor ?</p>
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="postuler"
                checked={isChecked}
                onChange={handleOnChange}
              />
              <label for="scales">Yes</label>
            </div>

            <div className="postuleLink">
              {isChecked ? (
                <>
                  <Link to="/Postuler">Postuler</Link>
                </>
              ) : null}
            </div>
          </div>
          {errors.password?.message}
          <br />
          {/* {userErrors && userErrors} */}
          <button className="registerBtn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
