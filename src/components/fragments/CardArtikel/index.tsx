import Image from "next/image";
import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const CardArtikel: React.FC<Props> = ({ image, title, description, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="w-[400px] border shadow p-5 rounded-xl flex flex-col bg-white">
        <div className="mb-5">
          <Image
            src={image}
            width={500}
            height={500}
            alt={title}
            className="h-full w-full"
          />
        </div>
        <div className="h-full">
          <h2 className="text-xl font-semibold">{title.substring(0, 50)}...</h2>
          <p
            className="text-sm font-normal text-gray500 my-2 line-clamp-3"
            dangerouslySetInnerHTML={{
              __html: description.substring(0, 100) + "...",
            }}></p>
        </div>
        <Link
          href={link}
          className="text-blueLight text-base font-medium underline">
          Selengkapnya
        </Link>
      </div>
    </motion.div>
  );
};

export default CardArtikel;
