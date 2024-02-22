import CardForum from "@/components/fragments/CardForum";
import CardForumSkeleton from "@/components/fragments/CardForumSkeleton";
import forumServices from "@/services/forum";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  forum: any;
};

const ForumView: React.FC<Props> = ({ forum }) => {
  const [forumsData, setForumsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setForumsData(forum);
    setIsLoading(false);
  }, [forum]);

  return (
    <div className="mx-24 my-12 min-h-screen">
      <div className="flex justify-between items-center">
        <Link href="/forum/post-forum" className="text-2xl font-semibold">
          <span className="text-blueLight">+</span> Buat Topik
        </Link>
        <div className=" flex gap-3 items-center w-1/3">
          <input
            type="search"
            placeholder="Cari Artikel"
            className="w-full border-2 outline-none border-blueLight rounded-full px-4 py-2"
          />
          <i className="bx bx-search text-blueLight text-3xl"></i>
        </div>
      </div>
      <div className="my-12">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <CardForumSkeleton key={index} />
            ))
          : forumsData.map((forum: any) => (
              <CardForum
                fullname={forum.author}
                date={new Date(forum.created_at.seconds * 1000).toDateString()}
                title={forum.title}
                description={forum.description}
                link={forum.id}
                key={forum.id}
              />
            ))}
      </div>
    </div>
  );
};

export default ForumView;
