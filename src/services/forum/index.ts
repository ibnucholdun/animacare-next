import instance from "@/lib/axios/instance";

const forumServices = {
  postForum: (data: any, token: string) =>
    instance.post("/api/forum", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default forumServices;
