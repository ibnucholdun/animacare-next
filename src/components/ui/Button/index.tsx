import React from "react";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

const Button = (props: Props) => {
  const { children, type, onClick, className } = props;
  return (
    <button
      type={type}
      className={`border-none p-[10px] rounded ${className} text-sm hover:outline`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
