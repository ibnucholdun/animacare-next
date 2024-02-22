import ArtikelLayout from "@/components/layouts/ArtikelLayout";
import React from "react";

type Props = {};

const ArtikelFavoriteView = (props: Props) => {
  return (
    <ArtikelLayout>
      <h1 className="text-2xl font-semibold ">Artikel Favorite</h1>
      <div className="flex mt-8 mb-12 flex-wrap gap-16 justify-center"></div>
    </ArtikelLayout>
  );
};

export default ArtikelFavoriteView;
