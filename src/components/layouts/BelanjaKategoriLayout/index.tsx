import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Checkbox from "@/components/ui/Checkbox";
import CardProduct from "@/components/fragments/CardProduct";
import { convertIDR } from "@/utils/convertIDR";
import { useRouter } from "next/router";
import { capitalizeSentence } from "@/utils/capitalWord";

type Props = {
  title: string;
  children: React.ReactNode;
  productData: any;
};

const BelanjaKategoriLayout: React.FC<Props> = ({
  title,
  children,
  productData,
}) => {
  const [category, setCategory] = useState<any>({
    ["Makanan Kucing"]: false,
    ["Makanan Anjing"]: false,
    ["Parfum"]: false,
    ["Vitamin"]: false,
    ["Kandang"]: false,
    ["Susu"]: false,
    ["Obat"]: false,
    ["Box Pasir"]: false,
    ["Pasir"]: false,
    ["Aksesoris"]: false,
    ["Shampo"]: false,
    ["Tas Hewan"]: false,
  });

  const handelChange = (name: any) => {
    setCategory((prevCategory: any) => ({
      ...prevCategory,
      [name]: !prevCategory[name],
    }));
  };

  const checkedProducts = Object.entries(category)
    .filter((category) => category[1])
    .map((category) => category[0]);

  const filteredProducts = productData.filter((items: any) =>
    checkedProducts.includes(items.category)
  );

  const { query }: any = useRouter();
  const checkedTitle = capitalizeSentence(
    query?.belanja[0].split("-").join(" ")
  );
  console.log(checkedTitle);
  console.log(category["Makanan Kucing"]);
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
          <div className="flex flex-wrap gap-8 mb-24 h-full">
            {children}
            {filteredProducts.map((item: any, index: number) => (
              <CardProduct
                key={item?.id}
                image={item?.image}
                title={item?.name}
                price={convertIDR(item?.price)}
              />
            ))}
          </div>
        </div>
        <div className="w-3/12 bg-slate-100 pt-16">
          <div className="ml-8 mr-24 bg-white p-3">
            <h3 className="text-xl font-semibold text-center mb-2">Kategori</h3>
            <div className="flex flex-col gap-3 justify-center ">
              <Checkbox
                checked={
                  checkedTitle === "Makanan Kucing"
                    ? true
                    : category["Makanan Kucing"]
                }
                handelChange={() => {
                  handelChange("Makanan Kucing");
                }}
                name="makanan-kucing"
                id="1"
                title="Makanan Kucing"
              />
              <Checkbox
                checked={
                  checkedTitle === "Makanan Anjing"
                    ? true
                    : category["Makanan Anjing"]
                }
                handelChange={() => {
                  handelChange("Makanan Anjing");
                }}
                name="makanan-anjing"
                id="2"
                title="Makanan Anjing"
              />
              <Checkbox
                checked={checkedTitle === "Parfum" ? true : category["Parfum"]}
                handelChange={() => {
                  handelChange("Parfum");
                }}
                name="parfum"
                id="3"
                title="Parfum"
              />
              <Checkbox
                checked={
                  checkedTitle === "Vitamin" ? true : category["Vitamin"]
                }
                handelChange={() => {
                  handelChange("Vitamin");
                }}
                name="vitamin"
                id="4"
                title="Vitamin"
              />
              <Checkbox
                checked={
                  checkedTitle === "Kandang" ? true : category["Kandang"]
                }
                handelChange={() => {
                  handelChange("Kandang");
                }}
                name="kandang"
                id="5"
                title="Kandang"
              />
              <Checkbox
                checked={checkedTitle === "Susu" ? true : category["Susu"]}
                handelChange={() => {
                  handelChange("Susu");
                }}
                name="susu"
                id="6"
                title="Susu"
              />
              <Checkbox
                checked={checkedTitle === "Obat" ? true : category["Obat"]}
                handelChange={() => {
                  handelChange("Obat");
                }}
                name="obat"
                id="7"
                title="Obat"
              />
              <Checkbox
                checked={
                  checkedTitle === "Box Pasir" ? true : category["Box Pasir"]
                }
                handelChange={() => {
                  handelChange("Box Pasir");
                }}
                name="box-pasir"
                id="8"
                title="Box Pasir"
              />
              <Checkbox
                checked={checkedTitle === "Pasir" ? true : category["Pasir"]}
                handelChange={() => {
                  handelChange("Pasir");
                }}
                name="pasir"
                id="9"
                title="Pasir"
              />
              <Checkbox
                checked={
                  checkedTitle === "Aksesoris" ? true : category["Aksesoris"]
                }
                handelChange={() => {
                  handelChange("Aksesoris");
                }}
                name="aksesoris"
                id="10"
                title="Aksesoris"
              />
              <Checkbox
                checked={checkedTitle === "Shampo" ? true : category["Shampo"]}
                handelChange={() => {
                  handelChange("Shampo");
                }}
                name="shampo"
                id="11"
                title="Shampo"
              />
              <Checkbox
                checked={
                  checkedTitle === "Tas Hewan" ? true : category["Tas Hewan"]
                }
                handelChange={() => {
                  handelChange("Tas Hewan");
                }}
                name="tas-hewan"
                id="12"
                title="Tas Hewan"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelanjaKategoriLayout;
