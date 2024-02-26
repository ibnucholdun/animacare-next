import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  price: string;
};

const CardProduct: React.FC<Props> = ({ image, title, price }) => {
  return (
    <div className="w-[200px] border rounded-lg shadow-md">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="rounded-t-lg"
      />
      <div className="w-full p-3">
        <p className="text-sm font-light mb-2">{title}</p>
        <h3 className="text-lg font-semibold">{price}</h3>
      </div>
    </div>
  );
};

export default CardProduct;
