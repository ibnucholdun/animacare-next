import React from "react";
import ArtikelLayout from "../../layouts/ArtikelLayout";
import CardArtikel from "@/components/fragments/CardArtikel";

type Props = {
  articles: any[];
};

const ArtikelView: React.FC<Props> = ({ articles }) => {
  return (
    <ArtikelLayout>
      <h1 className="text-2xl font-semibold ">Artikel Terbaru</h1>
      <div className="flex mt-8 mb-12 flex-wrap gap-16 justify-center">
        {articles.map((article) => (
          <CardArtikel
            image={article.image}
            title={article.title}
            description={article.description}
            link={`/artikel/detail-artikel/${article.id}`}
            key={article.id}
          />
        ))}
      </div>
    </ArtikelLayout>
  );
};

export default ArtikelView;
