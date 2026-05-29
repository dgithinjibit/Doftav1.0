
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out';
  
  const variantStyles = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500',
    secondary: 'bg-stone-200 text-stone-800 hover:bg-stone-300 focus:ring-stone-400',
    outline: 'bg-transparent border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white focus:ring-emerald-500',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
