const Login = () => {
  return (
    <div className="main_  flex justify-between items-center flex-col-reverse lg:flex-row ">
      {/* left box  */}
      <div className="basis-[50%]">
        <img className="" src="../../public/logo.png" alt="" />
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
      </div>
      {/* right box  */}
      <div className="basis-[50%]">right box</div>
    </div>
  );
};

export default Login;
