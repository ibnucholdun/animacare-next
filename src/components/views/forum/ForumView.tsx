import CardForum from "@/components/fragments/CardForum";
import CardForumSkeleton from "@/components/fragments/CardForumSkeleton";
import Link from "next/link";
import React from "react";

type Props = {
  searchData: any;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  isLoading: boolean;
};

const ForumView: React.FC<Props> = ({
  searchData,
  setSearchValue,
  searchValue,
  isLoading,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

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
            value={searchValue}
            onChange={handleChange}
            className="w-full border-2 outline-none border-blueLight rounded-full px-4 py-2"
          />
          <i className="bx bx-search text-blueLight text-3xl"></i>
        </div>
      </div>
      <div className="my-12">
        {searchData !== null && searchData.length > 0 ? (
          searchData
            .sort(
              (a: any, b: any) => b.created_at.seconds - a.created_at.seconds
            )
            .map((forum: any) => (
              <CardForum
                fullname={forum.author}
                date={new Date(forum.created_at.seconds * 1000).toDateString()}
                title={forum.title}
                description={forum.description}
                image={forum.profileImage}
                link={forum.id}
                key={forum.id}
              />
            ))
        ) : (
          <h1
            className={`${
              searchData === null ? "hidden" : "text-2xl text-center"
            }`}>
            Tidak ada data
          </h1>
        )}

        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <CardForumSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default ForumView;
