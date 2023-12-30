import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const { data } = useSession();
  return (
    <div className="flex md:flex-row justify-between items-center border-b-2">
      <div className="p-3 ml-7">
        <Image
          src="/logoAnimacare.png"
          alt="Logo Animacare"
          width={100}
          height={0}
          className="w-[250px] h-[50px] object-contain"
        />
      </div>
      <div className="">
        <nav className="px-9">
          <ul className="flex flex-row gap-10 items-center">
            <li className="font-md text-xl cursor-default">Beranda</li>
            <li className="font-md text-xl cursor-default">Artikel</li>
            <li className="font-md text-xl cursor-default">Forum</li>
            <li className="font-md text-xl cursor-default">Belanja</li>
            <button
              type="button"
              className="font-md text-xl rounded bg-blueLight p-2 px-4 text-white "
              onClick={() => (data ? signOut() : signIn())}>
              {data ? "Logout" : "Login"}
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
