import Link from "next/link";
import React from "react";

type Props = {
  fullname: string;
  date: string;
  title: string;
  description: string;
  link: string;
};

const CardForum: React.FC<Props> = ({
  fullname,
  date,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium flex items-center gap-1">
          <i className="bx bx-user-circle text-4xl text-blueLight"></i>
          {fullname}
        </h1>
        <p className="text-sm">{date}</p>
      </div>
      <Link
        href={`/forum/detail-forum/${link}`}
        className="w-full bg-[#AFCAFB] border-2 border-blueLight rounded-lg p-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-md font-light pt-4">{description}</p>
      </Link>
    </div>
  );
};

export default CardForum;
