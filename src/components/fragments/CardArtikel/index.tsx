import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const CardArtikel: React.FC<Props> = ({ image, title, description, link }) => {
  return (
    <div className="w-[400px] border shadow p-5 rounded-xl">
      <div className="mb-5">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="h-full w-full"
        />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p
        className="text-sm font-normal text-gray500 my-2 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: description }}></p>
      <Link
        href={link}
        className="text-blueLight text-base font-medium underline">
        Selengkapnya
      </Link>
    </div>
  );
};

export default CardArtikel;
