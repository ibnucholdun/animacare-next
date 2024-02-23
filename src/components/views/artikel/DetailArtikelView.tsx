import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const DetailArtikelView = (props: Props) => {
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
        <h1 className="text-3xl font-semibold">
          Selain Wortel, Kenali Jenis Makanan yang Aman Dikonsumsi Kelinci
        </h1>
        <div className="w-full flex justify-center">
          <Image
            src="/artikel1.png"
            alt="Artikel"
            width={1000}
            height={1000}
            className="w-[700px] my-6 object-contain"
          />
        </div>
        <p className="my-6">test</p>
      </section>
    </div>
  );
};

export default DetailArtikelView;
