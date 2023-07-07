import React from 'react'
import LogInWithButton from './LogInWithButton'

const SigninOptions = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 items-center mt-4">
        <p className="text-[#747688]">OR</p>
        <LogInWithButton buttonText="Login with Google" variant="google" />
        <LogInWithButton buttonText="Login with Facebook" variant="facebook" />
        <p className="text-black text-[15px]">Don't have an account? <a href="/" className="text-[#ff6c00] text-[15px]">Sign up</a></p>
      </div>
    </div>
  )
}

export default SigninOptions