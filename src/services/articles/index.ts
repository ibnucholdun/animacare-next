import instance from "@/lib/axios/instance";

const articleServices = {
  getArticles: () => instance.get("/api/article"),

  postArticle: (data: any, token: string) =>
    instance.post("/api/article", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  updateArticle: (id: string, data: any, token: string) =>
    instance.put(
      "/api/article",
      { id, data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
};

export default articleServices;
