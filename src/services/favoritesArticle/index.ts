import instance from "@/lib/axios/instance";

const favoriteArtikel = {
  postFavoriteArtikel: (data: any, token: string) =>
    instance.post(`/api/article/favorite`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  deleteFavoriteArtikel: (data: any, token: string) =>
    instance.delete(`/api/article/favorite`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { data },
    }),
};

export default favoriteArtikel;
