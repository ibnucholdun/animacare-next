import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";

type Props = {
  lists: Array<{
    title: string;
    url: string;
    icon: string;
  }>;
};

const Sidebar = (props: Props) => {
  const { lists } = props;
  const { pathname } = useRouter();
  return (
    <div className="bg-blueLight h-screen flex flex-col items-center justify-between lg:w-[250px] text-white p-5">
      <div className="">
        <h1 className="mb-10 text-2xl text-center">Admin Panel</h1>
        <div className="flex flex-col gap-2">
          {lists.map((list, index) => (
            <Link
              href={list.url}
              className={`text-sm flex items-center gap-2 duration-[0.3s] py-2 px-3 rounded-lg hover:bg-white hover:text-blueLight hover:duration-[0.3s] hover:rounded:lg ${
                pathname === list.url &&
                "bg-white text-blueLight duration-[0.3s] rounded-lg"
              }`}
              key={list.title}>
              <i className={`bx ${list.icon} text-sm`} />
              <h4 className="text-sm">{list.title}</h4>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full">
        <Button
          type="button"
          className="w-full bg-slate-800 text-white hover:bg-white hover:text-blueLight rounded-lg"
          onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
