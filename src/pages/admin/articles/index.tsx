import ArticlesAdminView from "@/components/views/admin/Articels";
import articleServices from "@/services/articles";
import React, { useEffect, useState } from "react";

type Props = {};

const ArticlesPage = (props: Props) => {
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
      <ArticlesAdminView articles={articles} />
    </>
  );
};

export default ArticlesPage;
