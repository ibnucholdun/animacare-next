import React from "react";

type Props = {};

const CardForumSkeleton = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 mb-6 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 w-full">
          <div className="bg-slate-300 h-8 w-8 rounded-full"></div>
          <div className="bg-slate-300 h-8 w-1/3 rounded"></div>
        </div>
        <p className="bg-slate-300 h-8 w-32 rounded"></p>
      </div>
      <div className="w-full border-2 rounded-lg p-8">
        <h2 className="bg-slate-300 animate-pulse h-8 w-1/3 rounded"></h2>
        <p className="h-12 bg-slate-300 mt-4"></p>
      </div>
    </div>
  );
};

export default CardForumSkeleton;
