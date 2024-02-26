import instance from "@/lib/axios/instance";

const forumServices = {
  postForum: (data: any, token: string) =>
    instance.post("/api/forum", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  getForumById: (id: string) => instance.get(`/api/forum/${id}`),
  getSearchForum: (value: string) => instance.get(`/api/forum?search=${value}`),
};

export default forumServices;
