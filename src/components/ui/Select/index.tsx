import React from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  name: string;
  defaultValue?: string;
  disabled?: boolean;
  options: Option[];
};

const Select = (props: Props) => {
  const { label, name, defaultValue, disabled, options } = props;
  return (
    <div className="flex flex-col my-5">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        disabled={disabled}
        className="p-2 bg-[#eee] mt-1 border-none outline-none disabled:opacity-70">
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
