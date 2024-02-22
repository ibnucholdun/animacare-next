import CardForum from "@/components/fragments/CardForum";
import Link from "next/link";
import React from "react";

type Props = {};

const ForumView = (props: Props) => {
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
        <CardForum
          fullname="ibnu"
          date="22 Februari 2024"
          title="merawat kucing"
          description="disini ada yang tau ga cara merawat kucing dengan benar?"
          link="1"
        />
      </div>
    </div>
  );
};

export default ForumView;
