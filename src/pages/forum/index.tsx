import ForumView from "@/components/views/forum/ForumView";
import forumServices from "@/services/forum";
import React, { useEffect, useState } from "react";

type Props = {};

const ForumPage = (props: Props) => {
  const [searchData, setSearchData] = useState<any>(null);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getSearchForum = async (value: string) => {
    const { data } = await forumServices.getSearchForum(value);
    setSearchData(data.data);
  };

  useEffect(() => {
    getSearchForum(searchValue);
    setIsLoading(false);
  }, [searchValue]);

  return (
    <>
      <ForumView
        isLoading={isLoading}
        searchData={searchData}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
    </>
  );
};

export default ForumPage;
