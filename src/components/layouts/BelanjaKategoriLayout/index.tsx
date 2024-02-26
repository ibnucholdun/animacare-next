import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

type Props = {
  title: string;
  children: React.ReactNode;
};

const BelanjaKategoriLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="w-full">
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
        className="h-[400px]">
        <SwiperSlide>
          <div className="w-full">
            <Image
              src="/belanjaBanner1.png"
              alt="Belanja Banner"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image
              src="/belanjaBanner2.png"
              alt="belanja banner"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full flex justify-between pl-24 h-full">
        <div className="w-9/12 mt-16 h-full">
          <h1 className="text-3xl font-semibold mb-12">{title}</h1>
          <div className="flex flex-wrap gap-8 mb-24 h-full">{children}</div>
        </div>
        <div className="w-3/12 bg-slate-100 pt-16">
          <div className="ml-8 mr-24 bg-white p-3">
            <h3 className="text-xl font-semibold text-center mb-2">Kategori</h3>
            <div className="flex flex-col gap-3 justify-center ">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 "
                  name="makanan-kucing"
                  id="makanan-kucing"
                />
                <label htmlFor="makanan-kucing">Makanan Kucing</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="makanan-anjing"
                  id="makanan-anjing"
                />
                <label htmlFor="makanan-anjing">Makanan Anjing</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="parfum"
                  id="parfum"
                />
                <label htmlFor="parfum">Parfum</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="vitamin"
                  id="vitamin"
                />
                <label htmlFor="vitamin">Vitamin</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="kandang"
                  id="kandang"
                />
                <label htmlFor="kandang">Kandang</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="susu"
                  id="susu"
                />
                <label htmlFor="susu">Susu</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="obat"
                  id="obat"
                />
                <label htmlFor="obat">Obat</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="box-pasir"
                  id="box-pasir"
                />
                <label htmlFor="box-pasir">Box Pasir</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="pasir"
                  id="pasir"
                />
                <label htmlFor="pasir">Pasir</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="aksesoris"
                  id="aksesoris"
                />
                <label htmlFor="aksesoris">Aksesoris</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="shampo"
                  id="shampo"
                />
                <label htmlFor="shampo">Shampo</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  name="tas-hewan"
                  id="tas-hewan"
                />
                <label htmlFor="tas-hewan">Tas Hewan</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelanjaKategoriLayout;
