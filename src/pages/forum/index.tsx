import ForumView from "@/components/views/forum/ForumView";
import forumServices from "@/services/forum";
import React, { useEffect, useState } from "react";

type Props = {};

const ForumPage = (props: Props) => {
  const [forum, setForum] = useState([]);

  const getAllForums = async () => {
    const { data } = await forumServices.getAllForum();
    setForum(data.data);
  };
  useEffect(() => {
    getAllForums();
  }, []);
  return (
    <>
      <ForumView forum={forum} />
    </>
  );
};

export default ForumPage;
