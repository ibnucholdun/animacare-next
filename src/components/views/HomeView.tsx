import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardArtikel from "../fragments/CardArtikel";

type Props = {
  article: any;
};

const iconBelanja = [
  {
    icon: "/iconMakananKucing.png",
    title: "Makanan Kucing",
    link: "/belanja/makanan-kucing",
  },
  {
    icon: "/iconMakananAnjing.png",
    title: "Makanan Anjing",
    link: "/belanja/makanan-anjing",
  },
  {
    icon: "/iconParfum.png",
    title: "Parfum",
    link: "/belanja/parfum",
  },
  {
    icon: "/iconVitamin.png",
    title: "Vitamin",
    link: "/belanja/vitamin",
  },
  {
    icon: "/iconKandang.png",
    title: "Kandang",
    link: "/belanja/kandang",
  },
  {
    icon: "/iconSusu.png",
    title: "Susu",
    link: "/belanja/susu",
  },
  {
    icon: "/iconObat.png",
    title: "Obat",
    link: "/belanja/obat",
  },
  {
    icon: "/iconBoxPasir.png",
    title: "Box Pasir",
    link: "/belanja/box-pasir",
  },
];

const HomeView: React.FC<Props> = ({ article }) => {
  return (
    <div className="py-3">
      <section className="flex flex-row gap-5 justify-between items-center py-11">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">
            <span className="text-blueLight">Solusi</span> Kesehatan{" "}
            <span className="text-blueLight">Hewan</span> Tersayang
          </h1>
          <p className="text-md">
            Hadir untuk membantu animal lovers berkonsultasi dengan dokter hewan
            terpercaya!. Konsultasikan kesehatan hewan peliharaan kesayangan
            anda secara gratis hanya di AnimaCare!.
          </p>
          <Button className="bg-blueLight text-white px-7 w-2/12">Mulai</Button>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/imageHero.png"
            alt="image hero"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="my-24 flex flex-row gap-10 justify-between items-center">
        <div className="w-full">
          <Image
            src="/imageHero2.png"
            alt="image hero"
            width={500}
            height={700}
            className="object-cover h-full w-10/12 mx-auto"
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-semibold">Apa sih itu AnimaCare?</h1>
          <p className="text-md mt-5 w-10/12">
            AnimaCare adalah layanan kesehatan hewan online yang membantu Anda
            dalam menjaga dan merawat hewan peliharaan. Mulai dari konsultasi
            kesehatan hewan dengan dokter hewan handal & terpercaya, mencari
            artikel tentang seputar hewan peliharaan, membagikan cerita
            pengalaman tentang hewan peliharaan, dan juga berbelanja kebutuhan
            dan keperluan hewan peliharaan kesayangan Anda.
          </p>
        </div>
      </section>
      <section className="my-24">
        <div className="w-full flex flex-row justify-between ">
          <h1 className="text-2xl font-semibold">
            Jelajahi Artikel Menarik Seputar Hewan Peliharaan
          </h1>
          <Link href="/artikel" className="text-blueLight text-xl underline">
            Lebih Banyak
          </Link>
        </div>
        <div className="w-full">
          <div className="my-10 h-full">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                769: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              spaceBetween={150}
              slidesPerView={3}
              scrollbar={{ draggable: true }}
              mousewheel
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => {}}
              modules={[
                Navigation,
                Pagination,
                Mousewheel,
                Keyboard,
                Scrollbar,
                A11y,
              ]}>
              {article?.map((article: any) => (
                <SwiperSlide key={article.id} className="flex flex-col">
                  <CardArtikel
                    image={article?.image}
                    title={article?.title}
                    description={article?.description}
                    link={`/artikel/detail-artikel/${article?.id}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="my-24">
        <h1 className="text-2xl font-semibold">
          Belanja Keperluan{" "}
          <span className="text-blueLight">Hewan Kesayangan</span> Anda
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-12 mt-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {iconBelanja.map((item, index) => (
              <Link
                href={item.link || ""}
                className="border-blueLight flex flex-col items-center justify-center px-3 py-11 gap-3 border-2 rounded-md h-[250px] w-[200px]"
                key={index}>
                <Image src={item.icon} width={100} height={100} alt={"icon"} />
                <p className="text-xl font-semibold">{item.title}</p>
              </Link>
            ))}
            <Link
              href={"/belanja"}
              className="bg-blueLight text-white text-xl p-3 rounded-md text-center">
              Belanja <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
