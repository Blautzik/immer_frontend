"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";

// TODO change useref, use Formik for the login form. 
// Github is configured to be accepted as a session provider, we can use it to test registering users without the database. later we will change the providers to google.
// To test login ------>  username: immer password: test

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2 items-center text-black">
        <input onChange={(e) => (userName.current = e.target.value)}  className="border-b-2 mb-4" placeholder="Username" />
        <input type={"password"} onChange={(e) => (pass.current = e.target.value)} className="border-b-2 mb-4" placeholder='Password'/>
        
        <button type='submit' className='bg-orange-400 rounded-lg w-[5rem] px-1 py-2'  onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;