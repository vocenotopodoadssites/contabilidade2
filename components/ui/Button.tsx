import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    // Using the specific blue #0232ba
    primary: "border-transparent text-white bg-[#0232ba] hover:bg-[#022a9e] focus:ring-[#0232ba] shadow-lg hover:shadow-xl",
    secondary: "border-transparent text-[#0232ba] bg-white hover:bg-gray-50 focus:ring-white shadow-md",
    outline: "border-[#0232ba] text-[#0232ba] bg-transparent hover:bg-blue-50 focus:ring-[#0232ba]",
    whatsapp: "border-transparent text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500 shadow-lg hover:shadow-emerald-300/50"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};