import ArtikelView from "@/components/views/artikel/ArtikelView";
import articleServices from "@/services/articles";
import React, { useEffect, useState } from "react";

type Props = {};

const ArtikelPage = (props: Props) => {
  const [articles, setArticles] = useState<any[]>([]);
  const [searchData, setSearchData] = useState<any>(null);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getSearchArticle = async (value: string) => {
    const { data } = await articleServices.getSearchArticle(value);
    setSearchData(data.data);
  };

  useEffect(() => {
    getSearchArticle(searchValue);
    setIsLoading(false);
  }, [searchValue]);
  return (
    <>
      <ArtikelView
        isLoading={isLoading}
        searchData={searchData}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
    </>
  );
};

export default ArtikelPage;
