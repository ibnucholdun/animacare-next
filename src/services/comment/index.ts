import instance from "@/lib/axios/instance";

const commentServices = {
  postComment: (data: any, token: string, id: string) =>
    instance.post(`/api/forum/${id}/comment`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default commentServices;
