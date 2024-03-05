import React from "react";

type Props = {
  checked: boolean;
  handelChange: (e: any) => void;
  name: string;
  id: string;
  title: string;
};

const Checkbox: React.FC<Props> = ({
  checked,
  handelChange,
  name,
  id,
  title,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        className="w-6 h-6"
        name={name}
        id={id}
        checked={checked}
        onChange={handelChange}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default Checkbox;
