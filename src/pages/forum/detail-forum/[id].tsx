import DetailForumView from "@/components/views/forum/DetailForumView";
import forumServices from "@/services/forum";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const DetailForum = (props: Props) => {
  const [DetailForum, setDetailForum] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const { query }: any = useRouter();

  useEffect(() => {
    const getDetailForum = async () => {
      try {
        const { data } = await forumServices.getForumById(query.id);
        setDetailForum(data?.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailForum();
  }, [query.id]);
  return (
    <>
      <DetailForumView detailForum={DetailForum} isLoading={isLoading} />
    </>
  );
};

export default DetailForum;
