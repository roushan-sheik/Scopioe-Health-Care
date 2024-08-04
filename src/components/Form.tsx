/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FormTypes } from "../constant/type";

const Form = ({ type }: { type: string }) => {
  const [shoPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  // form handling

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    condition: false,
  });

  function handleChange(e: any) {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // confirm password check
  function handleConfirmPassword(event: any) {
    const confirmPass = event.target.value;
    setError("");
    if (!(confirmPass === user.password)) {
      setError("Password dose not match");
      return;
    }
  }

  // handle the form
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      {/* name */}
      {type === FormTypes.SignUp && (
        <div>
          <label className="font-medium" htmlFor="name">
            Name
          </label>
          <div className="border p-4 border-[#E7E7E7] rounded-[10px]">
            <input
              type="text"
              className="focus:outline-none"
              placeholder="@username"
              onChange={handleChange}
              name="name"
            />
          </div>
        </div>
      )}
      {/* Email */}
      <div className="mt-4">
        <label className="font-medium" htmlFor="email">
          Email
        </label>
        <div className="border p-4 border-[#E7E7E7] rounded-[10px]">
          <input
            type="email"
            className="focus:outline-none"
            placeholder="Enter your email"
            onChange={handleChange}
            name="email"
          />
        </div>
      </div>
      {/* Password */}
      <div className="mt-4">
        <label className="font-medium" htmlFor="password">
          Password
        </label>
        <div className="border p-4 flex items-center justify-between border-[#E7E7E7] rounded-[10px]">
          <input
            type={shoPassword ? "text" : "password"}
            className="focus:outline-none"
            onChange={handleChange}
            placeholder="Enter your password"
            name="password"
          />
          <p
            className="cursor-pointer"
            onClick={() => setShowPassword(!shoPassword)}
          >
            {shoPassword ? <FiEyeOff /> : <FiEye />}
          </p>
        </div>
      </div>
      {/* confirm Password */}
      {type === FormTypes.SignUp && (
        <div className="mt-4">
          <label className="font-medium" htmlFor="password">
            Confirm Password
          </label>
          <div className="border p-4 flex items-center justify-between border-[#E7E7E7] rounded-[10px]">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="focus:outline-none"
              placeholder="Re-type password"
              onChange={handleConfirmPassword}
              name="confirmPassword"
            />
            <p
              className="cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </p>
          </div>
          {error && <p className=" text-red-500">{error}</p>}
        </div>
      )}
      {/* check box and remember me */}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex mt-2 items-center gap-3">
          <input
            className="text_brand "
            id="condition"
            type="checkbox"
            name={"condition"}
            checked={user.condition}
            onChange={handleChange}
          />
          <label htmlFor="condition" className="text_brand">
            {type === FormTypes.SignIn
              ? "Remember me"
              : "Accept Terms of Service"}
          </label>
        </div>
        <div>
          {type === FormTypes.SignUp && (
            <a className="text_brand underline" href="#">
              Forget Password
            </a>
          )}
        </div>
      </div>
      {/* submit button */}
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="rounded-lg  w-[271px] bg_brand px-8 py-3 text-xl text-white duration-300 active:scale-95"
        >
          {type === FormTypes.SignIn ? "Sign in" : "Sign up"}
        </button>
      </div>
    </form>
  );
};

export default Form;
