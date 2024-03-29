import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

type Props = {
  name: string;
  date: string;
  comment: string;
  image: string;
};

const CardComment: React.FC<Props> = ({ name, date, comment, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="flex gap-1 mb-6">
        <Image
          src={image}
          alt={name}
          width={40}
          height={0}
          className="w-[40px] h-[40px] object-cover rounded-full"
        />
        <div className="border border-slate-200 p-4 w-full rounded-lg">
          <div className="flex items-center gap-2">
            <h2 className="text-md font-semibold text-slate-600">{name} • </h2>
            <p className="text-sm font-extralight">{date}</p>
          </div>
          <p className="text-xl  pt-4">{comment}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CardComment;
