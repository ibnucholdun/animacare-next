import React from "react";
import ArtikelLayout from "../../layouts/ArtikelLayout";
import CardArtikel from "@/components/fragments/CardArtikel";
import CardArtikelSkeleton from "@/components/fragments/CardArtikelSkeleton";

type Props = {
  searchData: any;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  isLoading: boolean;
};

const ArtikelView: React.FC<Props> = ({
  searchData,
  setSearchValue,
  searchValue,
  isLoading,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

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
      <h1 className="text-2xl font-semibold ">Artikel Terbaru</h1>
      <div className="flex mt-8 mb-12 flex-wrap gap-16 justify-center">
        {searchData !== null && searchData.length > 0 ? (
          searchData.map((article: any) => (
            <CardArtikel
              image={article.image}
              title={article.title}
              description={article.description}
              link={`/artikel/detail-artikel/${article.id}`}
              key={article.id}
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

        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <CardArtikelSkeleton key={index} />
          ))}
      </div>
    </ArtikelLayout>
  );
};

export default ArtikelView;
