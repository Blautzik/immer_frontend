"use client";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import './style.css'; // Import the custom CSS file
import Icon from '../../../../public/assets/immer icon_orange.svg';
import Logo from '../../../../public/assets/immer logo.svg';
// import GoogleIcon from '../../../../public/assets/sign-in-icons/google-icon.svg';
// import FbIcon from '../../../../public/assets/sign-in-icons/facebook-icon.svg';
import EmailIcon from '../../../../public/assets/sign-in-icons/email.svg';
import LockIcon from '../../../../public/assets/sign-in-icons/Lock.svg';
import OpenEye from '../../../../public/assets/sign-in-icons/open-eye.png';
import ClosedEye from '../../../../public/assets/sign-in-icons/closed-eye.png';
// components
import Button from "@/app/components/Button";
import Toggle from "@/app/components/toggle/Toggle";
import LogInWithButton from "@/app/components/LogInWithButton";

// TODO change useref, use Formik for the login form. 
// Github is configured to be accepted as a session provider, we can use it to test registering users without the database. later we will change the providers to google.
// To test login ------>  username: immer password: test

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className="bg-white container ">
      <div className="flex flex-col mx-auto max-w-[400px] justify-center bg-white h-screen px-6 py-10">
        <SigninLogo />
        <h3 className="text-base font-semibold text-[#120D26] mb-4">Sign in</h3>

        {/* input fields */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center border border-[#E4DFDF] focus:border-[#747688] outline-none rounded-[12px] text-[#747688] w-full px-4">
            <img src={EmailIcon.src} alt="" />
            <input onChange={(e) => (userName.current = e.target.value)}
              className="ml-4 py-4 outline-none w-full" placeholder="Username" />
          </div>
          <div className="flex flex-row items-center border border-[#E4DFDF] focus:border-[#747688] outline-none rounded-[12px] text-[#747688] w-full px-4">
            <img src={LockIcon.src} alt="" />
            <input type={showPassword ? "text" : "password"} onChange={(e) => (pass.current = e.target.value)} className="ml-4 py-4 outline-none w-full mr-3" placeholder='Password' />

            {/* Password visibility toggle button  */}
            <button
              type="button"
              className=" text-[#747688] focus:outline-none"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? (
                <img src={ClosedEye.src} alt="" className="h-[24px] w-[24px]" />
              ) : (
                <img src={OpenEye.src} alt="" className="h-[24px] w-[24px]" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between my-4">
          <div className="flex flex-row">
            <Toggle />
            <p className="text-black ml-4 text-sm">Remember me</p>
          </div>
          <a href="/" className="text-black text-sm">Forgot Password?</a>
        </div>

        {/* Sign in button  */}
        <Button
          variant="primary"
          type='submit'
          onClick={onSubmit} >
          SIGN IN
        </Button>

        {/* sign in options */}
        <div className="flex flex-col gap-3 items-center mt-4">
          <p className="text-[#747688]">OR</p>
          <LogInWithButton buttonText="Login with Google" variant="google" />
          <LogInWithButton buttonText="Login with Facebook" variant="facebook" />
          <p className="text-black text-[15px]">Don't have an account? <a href="/" className="text-[#ff6c00] text-[15px]">Sign up</a></p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
