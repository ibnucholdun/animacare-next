import React from "react";

type Props = {};

const CardArtikelSkeleton: React.FC<Props> = ({}) => {
  return (
    <div className="w-[400px] border shadow p-5 rounded-xl animate-pulse">
      <div className="mb-3 bg-slate-200 h-[300px]" />
      <h2 className="bg-slate-200 mb-3 h-8 w-full" />
      <p className=" bg-slate-200 mb-3 h-24 w-full" />
      <p className="bg-slate-200 h-6 w-1/3" />
    </div>
  );
};

export default CardArtikelSkeleton;
