import instance from "@/lib/axios/instance";

const forumServices = {
  postForum: (data: any, token: string) =>
    instance.post("/api/forum", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  getAllForum: () => instance.get("/api/forum"),
  getForumById: (id: string) => instance.get(`/api/forum/${id}`),
};

export default forumServices;
