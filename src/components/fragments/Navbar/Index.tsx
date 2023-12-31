import Button from "@/components/ui/Button";
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
          className="w-[200px] h-[40px] object-contain"
        />
      </div>
      <div className="">
        <nav className="px-9">
          <ul className="flex flex-row gap-10 items-center">
            <li className="font-md cursor-default">Beranda</li>
            <li className="font-md cursor-default">Artikel</li>
            <li className="font-md cursor-default">Forum</li>
            <li className="font-md cursor-default">Belanja</li>
            <Button
              type="button"
              className=" bg-blueLight px-4 text-white hover:bg-white hover:text-blueLight text-md"
              onClick={() => (data ? signOut() : signIn())}>
              {data ? "Logout" : "Login"}
            </Button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
