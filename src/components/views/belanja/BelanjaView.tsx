import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import CardProduct from "@/components/fragments/CardProduct";
import BelanjaKategoriLayout from "@/components/layouts/BelanjaKategoriLayout";

// Utils
import { capitalizeSentence } from "@/utils/capitalWord";
import { convertIDR } from "@/utils/convertIDR";

// Assets
import {
  IconMakananKucing,
  IconMakananAnjing,
  IconParfum,
  IconVitamin,
  IconKandang,
  IconSusu,
  IconObat,
  IconBoxPasir,
  IconPasir,
  IconAksesoris,
  IconSampo,
  IconTasHewan,
} from "@/assets/icons";
import { Belanja1, Belanja2, Belanja3 } from "@/assets/images";

type Props = {
  productData: any;
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
  {
    icon: IconPasir,
    title: "Pasir",
    link: "/belanja/pasir",
  },
  {
    icon: IconAksesoris,
    title: "Aksesoris",
    link: "/belanja/aksesoris",
  },
  {
    icon: IconSampo,
    title: "Shampo",
    link: "/belanja/shampo",
  },
  {
    icon: IconTasHewan,
    title: "Tas Hewan",
    link: "/belanja/tas-hewan",
  },
];

const BelanjaView: React.FC<Props> = ({ productData }) => {
  const { query }: any = useRouter();

  return (
    <>
      {Object.keys(query).length === 0 && (
        <div className="w-full px-24 my-12">
          <h1 className="text-3xl font-semibold ">
            Temukan produk yang dibutuhkan{" "}
            <span className="text-blueLight">Hewan Kesayangan Anda!</span>
          </h1>
          <section className="w-full flex justify-between p-6 mt-12 mb-24 gap-8">
            <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
              <Image
                src={Belanja1}
                alt="belanja"
                width={500}
                height={500}
                className="w-64"
              />
              <p className="text-lg font-light text-center mt-4">
                Selamat berbelanja!, silahkan pilih kategori produk sesuai
                kebutuhan yang Anda inginkan
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
              <Image
                src={Belanja2}
                alt="belanja"
                width={500}
                height={500}
                className="w-64"
              />
              <p className="text-lg font-light text-center mt-4">
                Setelah Anda memilih kategori produk dan memilih salah satu
                produk yang Anda inginkan, kami akan mengarahkan Anda ke salah
                satu platform marketplace terbaik dan terpercaya
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
              <Image
                src={Belanja3}
                alt="belanja"
                width={500}
                height={500}
                className="w-64"
              />
              <p className="text-lg font-light text-center mt-4">
                Selesaikan proses belanja Anda dan temukan banyak diskon yang
                bisa Anda dapatkan pada produk yang diinginkan.
              </p>
            </div>
          </section>
          <h2 className="text-2xl font-semibold">Kategori Pilihan</h2>
          <section className="mb-24">
            <div className="flex flex-wrap items-center justify-center gap-12 mt-10">
              <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                {iconBelanja.map((item, index) => (
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
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
      {query?.belanja && (
        <BelanjaKategoriLayout
          productData={productData}
          title={`${capitalizeSentence(
            query?.belanja[0].split("-").join(" ")
          )}`}>
          {query?.belanja[0] === "makanan-kucing" &&
            productData
              .filter(
                (item: { category: string }) =>
                  item.category === "Makanan Kucing"
              )
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "makanan-anjing" &&
            productData
              .filter(
                (item: { category: string }) =>
                  item.category === "Makanan Anjing"
              )
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "parfum" &&
            productData
              .filter(
                (item: { category: string }) => item.category === "Parfum"
              )
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "vitamin" &&
            productData
              .filter(
                (item: { category: string }) => item.category === "Vitamin"
              )
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "kandang" &&
            productData
              .filter(
                (item: { category: string }) => item.category === "Kandang"
              )
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "susu" &&
            productData
              .filter((item: { category: string }) => item.category === "Susu")
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "obat" &&
            productData
              .filter((item: { category: string }) => item.category === "Obat")
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "box-pasir" &&
            productData
              .filter(
                (item: { category: string }) => item.category === "Box Pasir"
              )
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "pasir" &&
            productData
              .filter((item: { category: string }) => item.category === "Pasir")
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "aksesoris" &&
            productData
              .filter(
                (item: { category: string }) => item.category === "Aksesoris"
              )
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "shampo" &&
            productData
              .filter(
                (item: { category: string }) => item.category === "Shampo"
              )
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
          {query?.belanja[0] === "tas-hewan" &&
            productData
              .filter(
                (item: { category: string }) => item.category === "Tas Hewan"
              )
              .map((item: any, index: number) => (
                <CardProduct
                  key={item?.id}
                  image={item?.image}
                  title={item?.name}
                  price={convertIDR(item?.price)}
                />
              ))}
        </BelanjaKategoriLayout>
      )}
    </>
  );
};

export default BelanjaView;
