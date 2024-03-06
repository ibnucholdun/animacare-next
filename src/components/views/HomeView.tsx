import React from "react";
import Link from "next/link";
import Image from "next/image";

// Swipper
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

// Framer
import { motion } from "framer-motion";

// Components
import Button from "../ui/Button";
import CardArtikel from "../fragments/CardArtikel";

// Assets
import { ImageHero, ImageHero2 } from "@/assets/images";
import {
  IconMakananKucing,
  IconMakananAnjing,
  IconParfum,
  IconVitamin,
  IconKandang,
  IconSusu,
  IconObat,
  IconBoxPasir,
} from "@/assets/icons";
import { Vector1, Vector2, Vector3, Vector4, Vector5 } from "@/assets/vector";

type Props = {
  article: any;
};

const iconBelanja = [
  {
    icon: IconMakananKucing,
    title: "Makanan Kucing",
    link: "/belanja/makanan-kucing",
  },
  {
    icon: IconMakananAnjing,
    title: "Makanan Anjing",
    link: "/belanja/makanan-anjing",
  },
  {
    icon: IconParfum,
    title: "Parfum",
    link: "/belanja/parfum",
  },
  {
    icon: IconVitamin,
    title: "Vitamin",
    link: "/belanja/vitamin",
  },
  {
    icon: IconKandang,
    title: "Kandang",
    link: "/belanja/kandang",
  },
  {
    icon: IconSusu,
    title: "Susu",
    link: "/belanja/susu",
  },
  {
    icon: IconObat,
    title: "Obat",
    link: "/belanja/obat",
  },
  {
    icon: IconBoxPasir,
    title: "Box Pasir",
    link: "/belanja/box-pasir",
  },
];

const HomeView: React.FC<Props> = ({ article }) => {
  return (
    <main className="py-3">
      <section className="relative">
        <Image
          src={Vector1}
          alt="vector1"
          width={100}
          height={100}
          className="absolute left-5 bottom-0"
        />
        <Image
          src={Vector2}
          alt="vector2"
          width={100}
          height={100}
          className="absolute right-0 bottom-1/2"
        />
        <Image
          src={Vector4}
          alt="vector4"
          width={100}
          height={100}
          className="absolute right-1/3 bottom-12 -z-10"
        />
        <Image
          src={Vector5}
          alt="vector5"
          width={100}
          height={100}
          className="absolute right-1/2 top-5"
        />
        <div className="flex flex-row gap-5 justify-between items-center py-11   mx-24">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">
              <span className="text-blueLight">Solusi</span> Kesehatan{" "}
              <span className="text-blueLight">Hewan</span> Tersayang
            </h1>
            <p className="text-md">
              Hadir untuk membantu animal lovers berkonsultasi dengan dokter
              hewan terpercaya!. Konsultasikan kesehatan hewan peliharaan
              kesayangan anda secara gratis hanya di AnimaCare!.
            </p>
            <motion.div
              whileHover={{ scale: [null, 1.1, 1] }}
              transition={{ duration: 0.3 }}
              className="w-[100px]">
              <Button className="bg-blueLight text-white py-2 w-full hover:text-blueLight hover:bg-white">
                Mulai
              </Button>
            </motion.div>
          </div>
          <div className="w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}>
              <Image
                src={ImageHero}
                alt="image hero"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="my-24 flex flex-row gap-10 justify-between items-center mx-24">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}>
            <Image
              src={ImageHero2}
              alt="image hero"
              width={500}
              height={700}
              className="object-cover h-full w-10/12 mx-auto"
            />
          </motion.div>
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
      <section className="my-24 relative">
        <Image
          src={Vector3}
          alt="vector3"
          width={600}
          height={600}
          className="absolute left-10 top-10 -z-50"
        />
        <Image
          src={Vector1}
          alt="vector1"
          width={100}
          height={100}
          className="absolute right-20 bottom-0 -z-50"
        />
        <div className="mx-24">
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
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}>
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-24 mx-24">
        <h1 className="text-2xl font-semibold">
          Belanja Keperluan{" "}
          <span className="text-blueLight">Hewan Kesayangan</span> Anda
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-12 mt-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {iconBelanja.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={index}>
                <Link
                  href={item.link || ""}
                  className="border-blueLight flex flex-col items-center justify-center px-3 py-11 gap-3 border-2 rounded-md h-[250px] w-[200px]"
                  key={index}>
                  <Image
                    src={item.icon}
                    width={100}
                    height={100}
                    alt={"icon"}
                  />
                  <p className="text-xl font-semibold">{item.title}</p>
                </Link>
              </motion.div>
            ))}
            <Link
              href={"/belanja"}
              className="bg-blueLight text-white text-xl p-3 rounded-md text-center">
              Belanja <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeView;
