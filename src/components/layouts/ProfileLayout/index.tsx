import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const ProfileLayout = (props: Props) => {
  const { pathname } = useRouter();
  const { children } = props;
  return (
    <div className="w-full ">
      <div className="px-24">
        <h1 className="text-3xl font-medium py-7 flex  items-center">
          <i className="bx bxs-edit pr-3"></i>Edit Profile
        </h1>
      </div>
      <hr className="border bg-slate-100" />
      <div className=" flex flex-row">
        <div className="w-1/4 bg-slate-100 min-h-full ">
          <div className=" flex flex-col gap-3 p-10 pl-24">
            <Link
              href={"/member/profile"}
              className={`flex items-center justify-start hover:bg-white hover:shadow-md hover:text-blueLight px-3 py-1 rounded ${
                pathname === "/member/profile"
                  ? "bg-white shadow-md text-blueLight font-semibold"
                  : "text-slate-700"
              }`}>
              <i className="bx bx-user-circle text-2xl"></i>
              <span className="ml-3">Profile</span>
            </Link>
            <Link
              href={"/member/profile/password"}
              className={`flex items-center justify-start  hover:text-blueLight hover:bg-white hover:shadow-md px-3 py-1 rounded ${
                pathname === "/member/profile/password"
                  ? "bg-white shadow-md text-blueLight font-semibold"
                  : "text-slate-700"
              }`}>
              <i className="bx bx-key text-2xl"></i>
              <span className="ml-3">Katasandi</span>
            </Link>
          </div>
        </div>
        <div className="w-full min-h-full pr-24">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
