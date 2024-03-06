import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Services
import favoriteArtikel from "@/services/favoritesArticle";

// Toastify
import { toast } from "react-toastify";

type Props = {
  detailArticle: any;
  profile: any;
  session: any;
};

const DetailArtikelView: React.FC<Props> = ({
  detailArticle,
  session,
  profile,
}) => {
  const { query } = useRouter();
  const getFavoriteFavorite = profile?.favorite_articles?.find(
    (item: any) => item.article_id === query.id
  );

  const handleButtonFavorite = async (e: any) => {
    e.preventDefault();

    const data = {
      title: detailArticle?.title,
      description: detailArticle?.description,
      image: detailArticle?.image,
      article_id: query.id,
      isFavorite: true,
    };
    try {
      const result = await favoriteArtikel.postFavoriteArtikel(
        data,
        session.data?.accessToken
      );

      if (result.status === 200) {
        window.location.reload();
        toast.success("Artikel Ditandai Sebagai Favorite");
      }
    } catch (error) {
      toast.error("Artikel Gagal Ditandai Sebagai Favorite");
    }
  };

  const handleDeleteFavorite = async (e: any) => {
    e.preventDefault();
    const data = {
      article_id: query.id,
    };
    try {
      const result = await favoriteArtikel.deleteFavoriteArtikel(
        data,
        session?.data?.accessToken
      );

      if (result.status === 200) {
        window.location.reload();
        toast.success("Artikel Dihapus Dari Favorite");
      }
    } catch (error) {
      toast.error("Artikel Gagal Dihapus Dari Favorite");
    }
  };

  return (
    <div className="px-24 w-full">
      <h3 className="text-xl font-semibold text-blueLight flex items-center justify-end my-6">
        <form
          onSubmit={
            !getFavoriteFavorite?.isFavorite
              ? handleButtonFavorite
              : handleDeleteFavorite
          }
          className="flex items-center">
          {!getFavoriteFavorite?.isFavorite
            ? "Tandai Sebagai Favorite "
            : "Hapus Dari Favorite"}
          <button type="submit" className="p-2">
            {!getFavoriteFavorite?.isFavorite ? (
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
