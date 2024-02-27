import CardArtikel from "@/components/fragments/CardArtikel";
import ArtikelLayout from "@/components/layouts/ArtikelLayout";
import React from "react";

type Props = {
  profile: any;
  favorite: any;
};

const ArtikelFavoriteView: React.FC<Props> = ({ profile, favorite }) => {
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
      <div className="flex mt-8 mb-12 flex-wrap gap-16 justify-center">
        {favorite?.map((article: any) => (
          <CardArtikel
            image={article.image}
            title={article.title}
            description={article.description}
            link={`/artikel/detail-artikel/${article.article_id}`}
            key={article.article_id}
          />
        ))}
      </div>
    </ArtikelLayout>
  );
};

export default ArtikelFavoriteView;
