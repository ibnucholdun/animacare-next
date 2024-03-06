import Image from "next/image";
import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

type Props = {
  fullname: string;
  date: string;
  title: string;
  description: string;
  link: string;
  image: string;
};

const CardForum: React.FC<Props> = ({
  fullname,
  date,
  image,
  title,
  description,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-medium flex items-center gap-1">
            <Image
              src={image}
              alt={fullname}
              width={40}
              height={0}
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
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
    </motion.div>
  );
};

export default CardForum;
