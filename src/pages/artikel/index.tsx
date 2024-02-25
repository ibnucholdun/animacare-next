import ArtikelView from "@/components/views/artikel/ArtikelView";
import articleServices from "@/services/articles";
import React, { useEffect, useState } from "react";

type Props = {};

const ArtikelPage = (props: Props) => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const getAllArticles = async () => {
      const { data } = await articleServices.getArticles();
      setArticles(data.data);
    };

    getAllArticles();
  }, []);
  return (
    <>
      <ArtikelView articles={articles} />
    </>
  );
};

export default ArtikelPage;
