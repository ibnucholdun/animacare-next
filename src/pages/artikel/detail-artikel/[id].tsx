import DetailArtikelView from "@/components/views/artikel/DetailArtikelView";
import articleServices from "@/services/articles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const DetailartikelPage = (props: Props) => {
  const [detailArticle, setDetailArticle] = useState<any>([]);
  const { query }: any = useRouter();

  useEffect(() => {
    const getArticleById = async () => {
      const { data } = await articleServices.getArticleById(query.id);
      setDetailArticle(data?.data);
    };
    getArticleById();
  }, [query.id]);
  return (
    <>
      <DetailArtikelView detailArticle={detailArticle} />
    </>
  );
};

export default DetailartikelPage;
