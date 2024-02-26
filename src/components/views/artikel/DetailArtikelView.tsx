import favoriteArtikel from "@/services/favoritesArticle";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  detailArticle: any;
  profile: any;
  session: any;
};

const DetailArtikelView: React.FC<Props> = ({
  detailArticle,
  profile,
  session,
}) => {
  const [favorite, setFavorite] = useState(false);

  const getFavoriteId = profile?.favorite_articles?.find((item: any) => {
    if (item.article_id === detailArticle?.id) {
      console.log(item.id);
      return item.id;
    }
  });

  console.log(profile);
  const handleButtonFavorite = async (e: any) => {
    e.preventDefault();
    const data = {
      article_id: detailArticle?.id,
    };
    try {
      if (favorite) {
        const result = await favoriteArtikel.postFavoriteArtikel(
          data,
          session.data?.accessToken,
          detailArticle?.id
        );

        if (result.status === 200) {
          setFavorite(!favorite); //true
          console.log("success");
        } else {
          console.log("failed");
        }
      } else if (!favorite) {
        const data = {
          id: getFavoriteId.id,
          user_id: profile.id,
        };
        const result = await favoriteArtikel.deleteFavoriteArtikel(
          data,
          session?.data?.accessToken,
          detailArticle?.id
        );
        if (result.status === 200) {
          setFavorite(!favorite); //false
          console.log("success");
        } else {
          console.log("failed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-24 w-full">
      <h3 className="text-xl font-semibold text-blueLight flex items-center justify-end my-6">
        <form
          action=""
          onSubmit={handleButtonFavorite}
          className="flex items-center">
          {favorite ? "Tandai Sebagai Favorite" : "Hapus Dari Favorite"}
          <button type="submit" className="p-2">
            {favorite ? (
              <i className="bx bxs-toggle-left text-5xl"></i>
            ) : (
              <i className="bx bxs-toggle-right text-5xl"></i>
            )}
          </button>
        </form>
      </h3>
      <section className="w-full">
        <h1 className="text-3xl font-semibold">{detailArticle?.title}</h1>
        <div className="w-full flex justify-center">
          <Image
            src={detailArticle?.image}
            alt={detailArticle?.title}
            width={1000}
            height={1000}
            className="w-[700px] my-6 object-contain"
          />
        </div>
        <div
          className="my-6"
          dangerouslySetInnerHTML={{ __html: detailArticle?.description }}
        />
      </section>
    </div>
  );
};

export default DetailArtikelView;
