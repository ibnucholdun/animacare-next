import React from "react";

type Props = {
  label: string;
  name: string;
  type: string;
  placehoder?: string;
  classname?: string;
};

const Input = (props: Props) => {
  const { label, name, type, placehoder, classname } = props;
  return (
    <div className="flex flex-col my-[10px]">
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placehoder}
        className={`p-[10px] mt-[5px] border border-blueLight outline-none rounded text-sm ${classname}`}
      />
    </div>
  );
};

export default Input;
