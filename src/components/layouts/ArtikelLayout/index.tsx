import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const ArtikelLayout: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[420px] mb-10">
        <SwiperSlide>
          <div className="w-full h-full flex">
            <div className="w-7/12 bg-blueLight text-white flex flex-col justify-center items-center">
              <div className="mx-24 my-12 ">
                <h1 className="text-2xl font-semibold pb-8">
                  Syarat-syarat yang harus dipenuhi sebelum vaksinasi kucing
                </h1>
                <p className="text-lg">
                  Sama seperti manusia, seekor kucing juga perlu diberi beberapa
                  jenis vaksin, seperti vaksin F3 (tricat), vaksin F4
                  (tetracat), vaksin rabies, dan sebagainya. Pemberian vaksin
                  pada kucing sangatlah penting, karena itu menjadi salah satu
                  pencegahan dari beragam penyakit yang mungkin akan timbul
                  nantinya.
                </p>
              </div>
            </div>
            <div className="w-5/12">
              <Image
                src="/imageSliderArtikel.png"
                alt="image hero"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex">
            <div className="w-7/12 bg-[#EB687F] text-white flex flex-col justify-center items-center">
              <div className="mx-24 my-12 ">
                <h1 className="text-2xl font-semibold pb-8">
                  Ketahui! Makanan manusia yang boleh dikonsumsi anjing
                </h1>
                <p className="text-lg">
                  Anda gemas ingin membagikan makanan yang Anda makan kepada
                  Anjing kesayangan? Ditambah lagi, jika ia memasang wajah
                  memelas ketika melihat kita makan. Tetapi, apakah boleh
                  makanan yang dimakan manusia dimakan oleh anjing? Belum lagi,
                  khawatir makanan yang kita makan
                </p>
              </div>
            </div>
            <div className="w-5/12">
              <Image
                src="/imageSliderArtikel2.png"
                alt="image hero"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mx-24">
        <section className="  mb-12">
          <nav className="w-full">
            <div className="flex justify-around items-center ">
              <Link
                href="/artikel"
                className={`text-2xl font-semibold hover:underline hover:underline-offset-[10px] hover:decoration-2 hover:decoration-blueLight hover:text-blueLight ${
                  pathname === "/artikel" &&
                  "text-blueLight  underline underline-offset-[10px] decoration-2 decoration-blueLight"
                }`}>
                Semua
              </Link>
              <div className="border-r-2 py-6 border-r-slate-400" />
              <Link
                href="/artikel/favorite"
                className={`text-2xl font-semibold hover:underline hover:underline-offset-[10px] hover:decoration-2 hover:decoration-blueLight hover:text-blueLight ${
                  pathname === "/artikel/favorite" &&
                  "text-blueLight  underline underline-offset-[10px] decoration-2 decoration-blueLight"
                }`}>
                Favorite
              </Link>
            </div>
          </nav>
        </section>
        {children}
      </div>
    </>
  );
};

export default ArtikelLayout;
