import { Link } from "react-router-dom";
import Form from "../components/Form";
import { FormTypes } from "../constant/type";

const Login = () => {
  return (
    <div className="main_  flex justify-between items-center flex-col-reverse lg:flex-row ">
      {/* left box  */}
      <div className="basis-[50%]">
        <div className="flex justify-center lg:justify-start">
          <img className="  " src="../../public/logo.png" alt="" />
        </div>
        <div>
          <h2 className="text_black_pri lg:text-3xl text-[28px] text-center lg:text-start font-semibold">
            Sign In To Your Account
          </h2>
          <p>
            elcome Back! By click the sign up button, you are agree to Zenitood
            Terms and Service and acknlowledge the{" "}
            <a href="#" className="underline text_brand">
              Privacy and Policy
            </a>
          </p>
        </div>
        {/* form  */}
        <Form type={FormTypes.SignIn} />

        <div className="flex items-center gap-1 font-medium justify-center mt-4">
          <p>Already Have an Account?</p>
          <Link className="text_brand" to={"/register"}>
            Register
          </Link>
        </div>
      </div>
      {/* right box  */}
      <div className="basis-[50%]">right box</div>
    </div>
  );
};

export default Login;
