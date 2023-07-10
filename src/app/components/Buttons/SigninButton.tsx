import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const SigninButton: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  // Apply different Tailwind CSS classes based on the variant prop
  const buttonClass = variant === 'primary' ? 'bg-[#ff6c00] text-white mx-auto rounded-xl w-[250px] px-4 py-3' : 'bg-transparent text-[#ff6c00] border-2 border-[#ff6c00] mx-auto rounded-xl w-[250px] px-4 py-3';

  return (
    <button className={` ${buttonClass}`} {...rest}>
      {children}
    </button>
  );
};

export default SigninButton