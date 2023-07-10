import React from 'react'
import Icon from '../../../public/assets/immer icon_orange.svg';
import Logo from '../../../public/assets/immer logo.svg';

const SigninLogo = () => {
  return (
    <div>
      <div>
        <img
          className="h-[65px] w-[64px] mx-auto"
          src={Icon.src} alt="immerIcon" />
        <img
          className="h-[40px] w-[120px] mx-auto"
          src={Logo.src} alt="Logo" />
      </div>
    </div>
  )
}

export default SigninLogo