import { capitalizeWord } from "@/utils/capitalWord";
import React, { useState } from "react";

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
  onChange?: any;
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
    onChange = (e: any) => {
      setInputValue(capitalizeWord(e.target.value) || "");
    },
  } = props;
  const [inputValue, setInputValue] = useState(defaultValue || "");

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
        onChange={onChange}
        value={inputValue}
        className={`p-[10px] mt-[5px] outline-none rounded text-sm ${classname} ${
          disabled ? "" : "border border-blueLight"
        }`}
      />
    </div>
  );
};

export default Input;
