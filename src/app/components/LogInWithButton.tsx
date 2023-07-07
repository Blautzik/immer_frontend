import React from 'react';

interface LogInWithButtonProps {
  buttonText: string;
  variant: 'google' | 'facebook';
  // onClick?: () => void;
}

const LogInWithButton: React.FC<LogInWithButtonProps> = ({ buttonText, variant, onClick }) => {
  let iconPath = '';
  if (variant === 'google') {
    iconPath = '/assets/sign-in-icons/google-icon.svg';
  } else if (variant === 'facebook') {
    iconPath = '/assets/sign-in-icons/facebook-icon.svg';
  }

  return (
    <button className={`flex flex-row text-black justify-center gap-4 p-3 shadow-md rounded w-[80%] cursor:pointer ${variant}`}>
      <img className="mr-2" src={iconPath} alt={variant} width={20} />
      <span>{buttonText}</span>
    </button>
  );
};

export default LogInWithButton;
