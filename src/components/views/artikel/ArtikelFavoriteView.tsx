import React, { useEffect, useState } from "react";

// Components
import CardArtikel from "@/components/fragments/CardArtikel";
import ArtikelLayout from "@/components/layouts/ArtikelLayout";

type Props = {
  profile: any;
  favorite: any;
};

const ArtikelFavoriteView: React.FC<Props> = ({ profile, favorite }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState<any>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const datasearch = favorite?.filter((article: any) => {
      return (
        article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        article.description.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setSearchData(datasearch);
  }, [favorite, searchValue]);

  return (
    <ArtikelLayout>
      <div className=" flex gap-3 items-center mb-12">
        <input
          type="search"
          placeholder="Cari Artikel"
          className="w-full border-2 outline-none border-blueLight rounded-full px-4 py-2"
          value={searchValue}
          onChange={handleChange}
        />
        <i className="bx bx-search text-blueLight text-3xl"></i>
      </div>
      <h1 className="text-2xl font-semibold ">Artikel Favorite</h1>
      <div className="flex mt-8 mb-12 flex-wrap gap-16 justify-center">
        {searchData !== null && searchData?.length > 0 ? (
          searchData?.map((article: any) => (
            <CardArtikel
              image={article.image}
              title={article.title}
              description={article.description}
              link={`/artikel/detail-artikel/${article.article_id}`}
              key={article.article_id}
            />
          ))
        ) : (
          <h1
            className={`${
              searchData === null ? "hidden" : "text-2xl text-center"
            }`}>
            Artikel tidak ditemukan
          </h1>
        )}
      </div>
    </ArtikelLayout>
  );
};

export default ArtikelFavoriteView;
