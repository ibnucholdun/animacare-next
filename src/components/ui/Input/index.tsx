import React from "react";

type Props = {
  label: string;
  name: string;
  type: string;
  placehoder?: string;
  classname?: string;
  value?: string;
  disabled?: boolean;
  variant?: string;
  defaultValue?: string;
};

const Input = (props: Props) => {
  const {
    label,
    name,
    type,
    placehoder,
    classname,
    disabled,
    variant = "text-white",
    defaultValue,
  } = props;
  return (
    <div className="flex flex-col my-[10px]">
      <label htmlFor={name} className={variant}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placehoder}
        disabled={disabled}
        defaultValue={defaultValue}
        className={`p-[10px] mt-[5px] outline-none rounded text-sm ${classname} ${
          disabled ? "" : "border border-blueLight"
        }`}
      />
    </div>
  );
};

export default Input;
