import React, { Dispatch, SetStateAction } from "react";

type Props = {
  changeImage: File | null;
  name: string;
  setChangeImage: Dispatch<SetStateAction<File | null>>;
  setDisabled: Dispatch<SetStateAction<boolean>>;
};

const InputFile: React.FC<Props> = ({
  changeImage,
  name,
  setChangeImage,
  setDisabled,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mt-5 bg-[#eee] flex float-left w-full mb-5 flex-col items-center justify-center text-center gap-5 p-5 cursor-pointer rounded-lg">
        {changeImage?.name ? (
          <p>{changeImage?.name}</p>
        ) : (
          <>
            <p>
              Upload a new avatar, Larger image will be resized automatically
            </p>
            <p>
              Maximum Upload Size: <b>1MB</b>
            </p>
          </>
        )}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        className="opacity-0 absolute -z-[1]"
        onChange={(e: any) => {
          e.preventDefault();
          setChangeImage(e.currentTarget.files[0]);
          setDisabled(false);
        }}
      />
    </div>
  );
};

export default InputFile;
