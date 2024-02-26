import Button from "@/components/ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

type Props = {};

const activeArtikel = ["artikel"];
const activeForum = ["forum"];

const Navbar = (props: Props) => {
  const { data }: any = useSession();
  const { pathname } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

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
          {data ? (
            <div className="" ref={ref}>
              <Button
                type="button"
                className="flex flex-row gap-2 items-center justify-center outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className="bx bx-user text-xl"></i>
                <p className="text-[16px]">{data?.user?.fullname}</p>
                {isMenuOpen ? (
                  <i className="bx bx-chevron-up text-xl"></i>
                ) : (
                  <i className="bx bx-chevron-down text-xl"></i>
                )}
              </Button>
              {isMenuOpen && (
                <div className={`absolute top-16 right-[70px] z-50`}>
                  <div className="w-[160px] h-[100px] bg-blueLight flex flex-col items-start justify-center rounded-lg border text-white">
                    <Link
                      href={"/member/profile"}
                      className="flex flex-row gap-2 items-center justify-start hover:bg-white hover:text-blueLight hover:shadow-md px-2 py-1 rounded w-full ">
                      <i className="bx bx-user-circle text-2xl"></i>
                      <p>Lihat Profile</p>
                    </Link>
                    <Button
                      className="flex flex-row gap-2 items-center justify-start hover:bg-white hover:text-blueLight hover:shadow-md px-2 py-1 rounded w-full outline-none"
                      onClick={() => signOut()}>
                      <i className="bx bx-log-out-circle text-2xl"></i>
                      <p className="text-[16px]">Logout</p>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              type="button"
              className=" bg-blueLight px-4 text-white hover:bg-white hover:text-blueLight text-md"
              onClick={() => signIn()}>
              Login
            </Button>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
