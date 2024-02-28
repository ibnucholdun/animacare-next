import React from "react";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button = (props: Props) => {
  const { children, type, onClick, className, disabled } = props;
  return (
    <button
      type={type}
      className={`border-none p-[10px] rounded ${className} text-sm hover:outline`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
