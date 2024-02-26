import instance from "@/lib/axios/instance";

const favoriteArtikel = {
  postFavoriteArtikel: (data: any, token: string, id: string) =>
    instance.post(`/api/article/${id}/favorite`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  deleteFavoriteArtikel: (data: any, token: string, id: string) =>
    instance.delete(`/api/article/${id}/favorite`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { data },
    }),
};

export default favoriteArtikel;
