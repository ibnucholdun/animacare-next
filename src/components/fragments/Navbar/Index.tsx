import Button from "@/components/ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

type Props = {};

const activeArtikel = ["artikel"];
const activeForum = ["forum"];

const Navbar = (props: Props) => {
  const { data } = useSession();
  const { pathname } = useRouter();

  return (
    <div className="flex md:flex-row justify-between items-center border-b-2 px-24">
      <div className="py-5 ">
        <Image
          src="/logoAnimacare.png"
          alt="Logo Animacare"
          width={100}
          height={0}
          className="w-[200px] h-[40px] object-contain"
        />
      </div>
      <nav className="">
        <ul className="flex flex-row gap-10 items-center">
          <Link
            href="/"
            className={`font-md cursor-default ${
              pathname === "/" &&
              "text-blueLight  underline underline-offset-[10px] decoration-2 decoration-blueLight"
            } hover:underline hover:underline-offset-[10px] hover:decoration-2 hover:decoration-blueLight hover:text-blueLight`}>
            Beranda
          </Link>
          <Link
            href="/artikel"
            className={`font-md cursor-default hover:underline hover:underline-offset-[10px] hover:decoration-2 hover:decoration-blueLight hover:text-blueLight ${
              activeArtikel.includes(pathname.split("/")[1]) &&
              "text-blueLight  underline underline-offset-[10px] decoration-2 decoration-blueLight"
            }`}>
            Artikel
          </Link>
          <Link
            href="/forum"
            className={`font-md cursor-default hover:underline hover:underline-offset-[10px] hover:decoration-2 hover:decoration-blueLight hover:text-blueLight ${
              activeForum.includes(pathname.split("/")[1]) &&
              "text-blueLight  underline underline-offset-[10px] decoration-2 decoration-blueLight"
            }`}>
            Forum
          </Link>
          <Link
            href="/belanja"
            className={`font-md cursor-default hover:underline hover:underline-offset-[10px] hover:decoration-2 hover:decoration-blueLight hover:text-blueLight ${
              pathname === "/belanja" &&
              "text-blueLight  underline underline-offset-[10px] decoration-2 decoration-blueLight"
            }`}>
            Belanja
          </Link>
          <Button
            type="button"
            className=" bg-blueLight px-4 text-white hover:bg-white hover:text-blueLight text-md"
            onClick={() => (data ? signOut() : signIn())}>
            {data ? "Logout" : "Login"}
          </Button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
