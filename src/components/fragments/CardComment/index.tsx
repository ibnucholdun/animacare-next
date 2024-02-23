import React from "react";

type Props = {
  name: string;
  date: string;
  comment: string;
};

const CardComment: React.FC<Props> = ({ name, date, comment }) => {
  return (
    <div className="flex gap-1 mb-6">
      <i className="bx bx-user-circle text-4xl text-blueLight"></i>
      <div className="border border-slate-200 p-4 w-full rounded-lg">
        <div className="flex items-center gap-2">
          <h2 className="text-md font-semibold text-slate-600">{name} • </h2>
          <p className="text-sm font-extralight">{date}</p>
        </div>
        <p className="text-xl  pt-4">{comment}</p>
      </div>
    </div>
  );
};

export default CardComment;
