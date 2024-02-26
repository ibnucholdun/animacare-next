import ArtikelLayout from "@/components/layouts/ArtikelLayout";
import React from "react";

type Props = {};

const ArtikelFavoriteView = (props: Props) => {
  return (
    <ArtikelLayout>
      <div className=" flex gap-3 items-center mb-12">
        <input
          type="search"
          placeholder="Cari Artikel"
          className="w-full border-2 outline-none border-blueLight rounded-full px-4 py-2"
        />
        <i className="bx bx-search text-blueLight text-3xl"></i>
      </div>
      <h1 className="text-2xl font-semibold ">Artikel Favorite</h1>
      <div className="flex mt-8 mb-12 flex-wrap gap-16 justify-center"></div>
    </ArtikelLayout>
  );
};

export default ArtikelFavoriteView;
