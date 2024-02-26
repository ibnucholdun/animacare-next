import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  detailArticle: any;
};

const DetailArtikelView: React.FC<Props> = ({ detailArticle }) => {
  const [favoite, setFavorite] = useState(false);
  return (
    <div className="px-24 w-full">
      <h3 className="text-xl font-semibold text-blueLight flex items-center justify-end my-6">
        {favoite ? "Tandai Sebagai Favorite" : "Hapus Dari Favorit"}
        <button
          type="button"
          onClick={() => setFavorite(!favoite)}
          className="p-2">
          {favoite ? (
            <i className="bx bxs-toggle-left text-5xl"></i>
          ) : (
            <i className="bx bxs-toggle-right text-5xl"></i>
          )}
        </button>
      </h3>
      <section className="w-full">
        <h1 className="text-3xl font-semibold">{detailArticle?.title}</h1>
        <div className="w-full flex justify-center">
          <Image
            src={detailArticle?.image}
            alt={detailArticle?.title}
            width={1000}
            height={1000}
            className="w-[700px] my-6 object-contain"
          />
        </div>
        <div
          className="my-6"
          dangerouslySetInnerHTML={{ __html: detailArticle?.description }}
        />
      </section>
    </div>
  );
};

export default DetailArtikelView;
